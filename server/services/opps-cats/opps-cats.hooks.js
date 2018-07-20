const { authenticate } = require('@feathersjs/authentication').hooks
const adminOnly = require('../../lib/adminOnly')
const disable = require('../../lib/disable')('opps-cats')
const objectifyId = require('../../lib/objectifyId')
const checkFields = require('../../lib/checkFields')
const fields = ['name']
const maxLens = [64]

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
              toKeep.createdBy = context.params.user._id
              toKeep.createdAt = new Date()
              context.data = toKeep
              resolve(context)
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
          checkFields(data, fields, maxLens, false)
            .then(toKeep => {
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
    remove: [
      context => {
        return new Promise(resolve => {
          const done = () => resolve(context)
          const { app, result } = context
          const { _id } = result
          app
            .service('opps')
            .remove(null, {
              query: { cat: _id + '' },
            })
            .then(done)
            .catch(done)
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
