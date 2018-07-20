const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')

const disable = require('../../lib/disable')('opps')
const adminOnly = require('../../lib/adminOnly')
const objectifyId = require('../../lib/objectifyId')
const checkFields = require('../../lib/checkFields')
/*
  - fields
  cat: _id of item from opps-cats
  desc: description of opportunity
  link: link to opportunity
*/
const fields = ['cat', 'desc', 'link']
const maxLens = [false, 256, 2048]

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [],
    get: [],
    create: [
      adminOnly,
      context => {
        return new Promise((resolve, reject) => {
          const { data } = context
          checkFields(data, fields, maxLens, false)
            .then(toKeep => {
              context.app
                .service('opps-cats')
                .get(toKeep.cat)
                .then(() => {
                  toKeep.createdBy = context.params.user._id
                  toKeep.createdAt = new Date()
                  context.data = toKeep
                  resolve(context)
                })
                .catch(() => {
                  reject(new BadRequest('cat value is invalid'))
                })
            })
            .catch(reject)
        })
      },
    ],
    update: [disable],
    patch: [
      adminOnly,
      context => {
        return new Promise((resolve, reject) => {
          const { data } = context
          checkFields(data, fields, maxLens, true)
            .then(toKeep => {
              delete toKeep.cat
              if (Object.keys(toKeep) === 0)
                return reject(new BadRequest('nothing to update'))
              context.data = toKeep
              resolve(context)
            })
            .catch(reject)
        })
      },
    ],
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
