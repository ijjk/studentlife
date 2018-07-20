const { authenticate } = require('@feathersjs/authentication').hooks

const disable = require('../../lib/disable')('avatar')
const adminOwner = require('../../lib/adminOwner')('_id')
const checkRestrict = require('../../lib/checkRestrict')('updating_profile')
const objectifyId = require('../../lib/objectifyId')

// no non-file fields needed
const fields = {}
const parseUpload = require('../../lib/parseUpload')(fields)
const checkRmFile = require('../../lib/checkRmFile')

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [],
    get: [],
    create: [
      parseUpload,
      checkRestrict,
      context => {
        return new Promise(resolve => {
          const { _id } = context.params.user

          context.data._id = _id
          context.data.createdAt = new Date()

          const done = () => {
            resolve(context)
          }

          context.app
            .service('avatars')
            .remove(_id)
            .then(done)
            .catch(done)
        })
      },
    ],
    update: [disable],
    patch: [disable],
    remove: [checkRestrict, adminOwner],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [checkRmFile],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [checkRmFile],
    update: [],
    patch: [],
    remove: [],
  },
}
