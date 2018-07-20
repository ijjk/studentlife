const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest, Forbidden } = require('@feathersjs/errors')

const adminOnly = require('../../lib/adminOnly')
const adminOwner = require('../../lib/adminOwner')('createdBy')
const checkFields = require('../../lib/checkFields')
const checkRestrict = require('../../lib/checkRestrict')('posting')
const objectifyId = require('../../lib/objectifyId')
const badWordFilter = require('../../lib/badWordFilter')
const disable = require('../../lib/disable')('comments')
/*
  - fields
  text: the comment text
  post: the id of the post it's commenting on
*/
const fields = ['text', 'post']
const maxLens = [512, false]

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [],
    get: [],
    create: [
      checkRestrict,
      context => {
        return new Promise((resolve, reject) => {
          const { data } = context

          if (!data.post)
            return reject(new BadRequest('post field is required'))

          context.app
            .service('posts')
            .get(data.post)
            .then(postData => {
              if (postData.archived)
                return reject(
                  new BadRequest('can not comment on archived post')
                )
            })
            .catch(() => {
              return reject(new BadRequest('post does not exist'))
            })
            .then(() => {
              return checkFields(data, fields, maxLens, false)
            })
            .then(toKeep => {
              if (Object.keys(toKeep).length === 0)
                return reject(
                  new BadRequest('comment does not have valid fields')
                )
              toKeep.text = badWordFilter(toKeep.text)
              toKeep.createdBy = context.params.user._id
              toKeep.createdAt = new Date()
              toKeep.archived = false
              toKeep.reported = false
              context.data = toKeep
              return true
            })
            .then(() => {
              resolve(context)
            })
            .catch(reject)
        })
      },
    ],
    update: [disable],
    patch: [
      adminOwner,
      context => {
        return new Promise((resolve, reject) => {
          const { app, data } = context
          delete data.post

          app
            .service('comments')
            .get(context.id)
            .then(res => {
              if (res.archived)
                return reject(
                  new BadRequest('archived comments can not be updated')
                )
            })
            .then(() => {
              return checkFields(data, fields, maxLens, true)
            })
            .then(toKeep => {
              if (data.archived && typeof data.archived === 'boolean')
                toKeep.archived = data.archived
              if (typeof data.reported === 'boolean') {
                if (!data.reported && context.params.user.role !== 'admin')
                  return reject(new Forbidden('action not permitted'))
                toKeep.reported = data.reported
              }
              if (Object.keys(toKeep).length === 0)
                return reject(new BadRequest('nothing to update'))

              if (toKeep.text) toKeep.text = badWordFilter(toKeep.text)

              toKeep.updatedBy = context.params.user._id
              toKeep.updatedAt = new Date()
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
