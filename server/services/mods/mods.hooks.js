const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')
const disable = require('../../lib/disable')('mods')
const adminOnly = require('../../lib/adminOnly')
const checkFields = require('../../lib/checkFields')
const objectifyId = require('../../lib/objectifyId')

const fields = ['page', 'user']
const maxLens = [false, false]

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [],
    get: [],
    create: [
      adminOnly,
      context => {
        return new Promise((resolve, reject) => {
          const { app, data } = context
          const checkUser = toKeep => {
            app
              .service('users')
              .get(toKeep.user)
              .then(() => {
                context.data = toKeep
                resolve(context)
              })
              .catch(() => reject(new BadRequest('user does not exist')))
          }
          const checkPage = toKeep => {
            app
              .service('pages')
              .get(toKeep.page)
              .then(res => {
                if (!res.modsOnly)
                  return reject(new BadRequest('page does not allow mods'))
                checkUser(toKeep)
              })
              .catch(() => reject(new BadRequest('page does not exist')))
          }

          checkFields(data, fields, maxLens, false)
            .then(toKeep => {
              app
                .service('mods')
                .find({
                  query: {
                    page: toKeep.page,
                    user: toKeep.user,
                    $limit: 0,
                  },
                })
                .then(res => {
                  if (res.total > 0)
                    return reject(new BadRequest('already added as mod'))
                  checkPage(toKeep)
                })
            })
            .catch(reject)
        })
      },
    ],
    update: [disable],
    patch: [disable],
    remove: [adminOnly],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
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
