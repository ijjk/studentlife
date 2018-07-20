const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest, Forbidden } = require('@feathersjs/errors')

const disable = require('../../lib/disable')('page-thumbs')
const adminOnly = require('../../lib/adminOnly')
const checkRestrict = require('../../lib/checkRestrict')('making_pages')
const objectifyId = require('../../lib/objectifyId')
const ObjectId = require('mongodb').ObjectId

// no non-file fields needed
const fields = {
  page: {
    required: true,
    validate: (context, page) => {
      return new Promise((resolve, reject) => {
        const pages = context.app.service('pages')
        pages
          .get(page)
          .then(res => {
            context.page_data = res
            resolve(true)
          })
          .catch(() => {
            reject(new BadRequest(`invalid page id ${page}`))
          })
      })
    },
  },
}
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
        return new Promise((resolve, reject) => {
          const { app, data, page_data } = context
          const { user } = context.params
          const toKeep = {
            _id: ObjectId(data.page),
            file: data.file,
            createdAt: new Date(),
            createdBy: user._id + '',
          }
          const done = () => {
            context.data = toKeep
            resolve(context)
          }
          if (!page_data)
            return reject(new Error('an error occurred processing request'))

          const canEdit = Boolean(
            user.role === 'admin' ||
              (page_data.createdBy && page_data.createdBy === user._id + '')
          )

          const forbid = () => reject(new Forbidden('invalid permission'))
          const finish = () =>
            app
              .service('page-thumbs')
              .remove(toKeep._id)
              .then(done)
              .catch(done)

          if (!canEdit) {
            if (page_data.modsOnly) {
              app
                .service('mods')
                .find({
                  query: { page: toKeep._id + '', user: user._id + '' },
                })
                .then(res => {
                  if (res.total === 0) return forbid()
                  finish()
                })
                .catch(reject)
            } else forbid()
          } else finish()
        })
      },
    ],
    update: [disable],
    patch: [disable],
    remove: [
      adminOnly,
      context => {
        if (context.params.provider) {
          throw new BadRequest('can not delete page thumb')
        }
        return context
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
