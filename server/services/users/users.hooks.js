const path = require('path')
const fs = require('fs-extra')
const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')

const search = require('feathers-mongodb-fuzzy-search')
const {
  hashPassword,
  protect,
} = require('@feathersjs/authentication-local').hooks
const adminOwner = require('../../lib/adminOwner')('_id')
const adminOnly = require('../../lib/adminOnly')
const disable = require('../../lib/disable')('users')
const checkFields = require('../../lib/checkFields')
const objectifyId = require('../../lib/objectifyId')

const fields = ['email', 'username', 'firstName', 'lastName', 'role']
const maxLens = [320, 16, 64, 64, 8]
const unique = ['email', 'username']
const updatable = ['username', 'role']
const updatableMaxLens = [16, 8]

const invRole = () => new BadRequest('role must be admin or user')
const checkUnique = (context, reject, skipMissing) => {
  const { app, data } = context
  const query = { $or: [] }
  const missingSome = unique.some(f => {
    if (!data[f]) {
      if (!skipMissing) {
        reject(new BadRequest(`${f} is required`))
        return true
      }
    } else {
      const toCheck = {}
      toCheck[f] = data[f]
      query.$or.push(toCheck)
      return false
    }
  })
  if (!missingSome || skipMissing)
    return app
      .service('users')
      .find({ query })
      .then(res => {
        if (res.total === 0) return true // its unique
        let whichField
        res.data.some(item => {
          return unique.some(f => {
            if (item[f] === data[f]) {
              whichField = f
              return true
            }
            return false
          })
        })
        reject(new BadRequest(`${whichField} can not be used`))
      })
}

const ifSetup = func => {
  return ctx => {
    const { app } = ctx
    if (app.get('publicConfig').doSetup) return Promise.resolve()
    return func(ctx)
  }
}

module.exports = {
  before: {
    all: [ifSetup(authenticate('jwt')), objectifyId],
    find: [
      search({
        fields: ['username', 'firstName', 'lastName'],
      }),
    ],
    get: [adminOwner],
    create: [
      ifSetup(adminOnly),
      context => {
        return new Promise((resolve, reject) => {
          const { app, data } = context

          if (!data.password)
            return reject(
              new BadRequest('password is required to create a user')
            )

          let toKeep = { password: data.password, createdAt: new Date() }
          const doCheckFields = () => {
            checkFields(data, fields, maxLens, false)
              .then(kept => {
                const { role } = kept
                if (role !== 'admin' && role !== 'user')
                  return reject(invRole())
                toKeep = Object.assign({}, toKeep, kept)
                context.data = toKeep
                resolve(context)
              })
              .catch(reject)
          }

          const genUsername = () => {
            if (data.username) return doCheckFields()
            const { firstName, lastName } = data
            const invVal = val => reject(new BadRequest(`${val} is required`))
            if (typeof firstName !== 'string') invVal('firstName')
            if (typeof lastName !== 'string') invVal('lastName')

            let username = firstName.substr(0, 8) + lastName.substr(0, 8)
            app
              .service('users')
              .find({
                query: {
                  $or: [{ firstName, lastName }, { username }],
                  $limit: 0,
                },
              })
              .then(res => {
                const offset = '' + res.total
                data.username =
                  res.total === 0
                    ? username
                    : username.substr(0, 16 - offset.length) + offset
                doCheckFields()
              })
              .catch(reject)
          }

          checkUnique(context, reject, true)
            .then(ok => ok && genUsername())
            .catch(genUsername)
        })
      },
      hashPassword(), // run hasPassword last as it can take a while
    ],
    update: [disable],
    patch: [
      adminOwner,
      hashPassword(),
      context => {
        return new Promise((resolve, reject) => {
          const { data, params } = context
          // only allow admins to update roles
          if (params.user.role !== 'admin') delete data.role

          const doCheckFields = () => {
            checkFields(data, updatable, updatableMaxLens, true)
              .then(toKeep => {
                if (Object.keys(toKeep).length === 0)
                  return reject(new BadRequest('nothing to update'))
                const { role } = toKeep
                if (role && role !== 'admin' && role !== 'user')
                  return reject(invRole())
                context.data = toKeep
                resolve(context)
              })
              .catch(reject)
          }

          checkUnique(context, reject, true)
            .then(ok => ok && doCheckFields())
            .catch(doCheckFields)
        })
      },
    ],
    remove: [adminOnly],
  },

  after: {
    all: [protect('password'), protect('email')],
    find: [],
    get: [],
    create: [
      async ctx => {
        const { app } = ctx
        const { doSetup, ...publicConfig } = app.get('publicConfig')
        if (!doSetup) return
        const lock = path.join(__dirname, '..', '..', '..', '.didSetup')
        // eslint-disable-next-line no-console
        await fs.writeFile(lock, '').catch(err => console.error(err))
        app.set('publicConfig', { ...publicConfig })
      },
    ],
    update: [],
    patch: [],
    remove: [
      context => {
        return new Promise(resolve => {
          const { app, result } = context
          const done = () => resolve(context)
          let r = 0
          const isArr = Array.isArray(result)

          const rmOne = () => {
            let data
            if (isArr && r < result.length) {
              data = result[r]
              r += 1
            } else if (result._id && r === 0) {
              data = result
              r += 1
            } else return done()

            const { _id } = data
            const err = () => {}

            app
              .service('posts')
              .remove(null, {
                query: { createdBy: _id + '' },
              })
              .catch(err)
              .then(() => {
                return app
                  .service('pages')
                  .patch(
                    null,
                    { createdBy: 'del-user' },
                    {
                      query: { createdBy: _id + '' },
                    }
                  )
                  .catch(err)
              })
              .then(() => {
                return app
                  .service('avatars')
                  .remove(_id)
                  .catch(err)
              })
              .then(() => {
                return app
                  .service('restricts')
                  .remove(_id)
                  .catch(err)
              })
              .then(() => {
                return app
                  .service('mods')
                  .remove(null, {
                    query: { user: _id + '' },
                  })
                  .catch(err)
              })
              .then(rmOne)
              .catch(rmOne)
          }
          rmOne()
        })
      },
    ],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
