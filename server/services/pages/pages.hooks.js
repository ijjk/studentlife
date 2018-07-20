const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest, Forbidden } = require('@feathersjs/errors')

const search = require('feathers-mongodb-fuzzy-search')
const adminOnly = require('../../lib/adminOnly')
const disable = require('../../lib/disable')('pages')
const checkRestrict = require('../../lib/checkRestrict')('making_pages')
const checkFields = require('../../lib/checkFields')
const objectifyId = require('../../lib/objectifyId')
const badWordFilter = require('../../lib/badWordFilter')

const fields = ['name', 'desc']
const maxLens = [48, 128]

const ensureUnique = (context, key, val) => {
  return new Promise((resolve, reject) => {
    const { app } = context
    const query = { $limit: 0 }
    query[key] = val
    app
      .service('pages')
      .find({ query })
      .then(res => {
        if (res.total > 0)
          return reject(new BadRequest(`${key} is already in use`))
        resolve()
      })
      .catch(resolve)
  })
}

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [
      search({
        fields: ['name'],
      }),
    ],
    get: [],
    create: [
      checkRestrict,
      context => {
        return new Promise((resolve, reject) => {
          const { data } = context
          checkFields(data, fields, maxLens, true)
            .then(toKeep => {
              if (!toKeep.desc) toKeep.desc = ''
              else toKeep.desc = badWordFilter(toKeep.desc)
              toKeep.name = badWordFilter(toKeep.name)
              toKeep.createdBy = context.params.user._id + ''
              toKeep.createdAt = new Date()
              toKeep.default = false
              context.data = toKeep

              ensureUnique(context, 'name', toKeep.name)
                .then(() => resolve(context))
                .catch(reject)
            })
            .catch(reject)
        })
      },
    ],
    update: [disable],
    patch: [
      checkRestrict,
      context => {
        return new Promise((resolve, reject) => {
          const { app, data, params } = context
          const { user } = params
          checkFields(data, fields, maxLens, true)
            .then(toKeep => {
              const finish = () => {
                context.data = toKeep
                resolve(context)
              }
              // check if user is being deleted and createdBy
              // is being set to del-user internally
              if (data.createdBy && !context.params.provider) {
                toKeep.createdBy = data.createdBy
                return finish()
              }
              if (Object.keys(toKeep).length === 0)
                return reject(new BadRequest('nothing to update'))

              if (toKeep.desc) toKeep.desc = badWordFilter(toKeep.desc)

              const forbid = () => {
                reject(new Forbidden('invalid permission'))
              }
              const checkName = () => {
                if (toKeep.name) {
                  toKeep.name = badWordFilter(toKeep.name)
                  ensureUnique(context, 'name', toKeep.name)
                    .then(finish)
                    .catch(reject)
                } else finish()
              }

              app
                .service('pages')
                .get(context.id)
                .then(pg => {
                  const canEdit = Boolean(
                    user.role === 'admin' ||
                      (pg.createdBy && pg.createdBy === user._id + '')
                  )

                  if (!canEdit) {
                    if (pg.modsOnly) {
                      app
                        .service('mods')
                        .find({
                          query: { page: pg._id + '', user: user._id + '' },
                        })
                        .then(res => {
                          if (res.total === 0) return forbid()
                          finish()
                        })
                        .catch(reject)
                    } else forbid()
                  } else checkName()
                })
                .catch(reject)
            })
            .catch(reject)
        })
      },
    ],
    remove: [
      adminOnly,
      context => {
        return new Promise((resolve, reject) => {
          const { app, id, params } = context
          if (id) {
            app
              .service('pages')
              .get(id)
              .then(pg => {
                if (pg.default)
                  return reject(
                    new BadRequest('default pages can not be deleted')
                  )
                resolve(context)
              })
              .catch(() => resolve(context)) // wasn't found just resolve
          } else {
            params.query.default = false
            resolve(context)
          }
        })
      },
    ],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [
      context => {
        return new Promise(resolve => {
          const done = () => resolve(context)
          const { app, result } = context
          const isArr = Array.isArray(result)
          let rIdx = 0

          const rmPage = () => {
            let _id

            if (isArr && rIdx < result.length) {
              _id = result[rIdx]._id
              rIdx += 1
            } else if (result._id && rIdx === 0) {
              _id = result._id
              rIdx += 1
            } else return done()

            app
              .service('posts')
              .remove(null, {
                query: { page: _id + '' },
              })
              .catch(() => {})
              .then(() => {
                return app.service('page-thumbs').remove(_id)
              })
              .then(rmPage)
              .catch(rmPage)
          }
          rmPage()
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
