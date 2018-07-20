const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest, Forbidden } = require('@feathersjs/errors')

const adminOwner = require('../../lib/adminOwner')('createdBy')
const adminOnly = require('../../lib/adminOnly')
const checkRestrict = require('../../lib/checkRestrict')('posting')
const disable = require('../../lib/disable')('posts')
const objectifyId = require('../../lib/objectifyId')
const datifyQuery = require('../../lib/datifyQuery')
const badWordFilter = require('../../lib/badWordFilter')

// the non-file fields that need to be processed
// number of fields need to be updated in posts.service if changed
const fields = {
  text: {
    required: false,
    validate: (context, text) => {
      return new Promise((resolve, reject) => {
        const invErr = () => {
          reject(new BadRequest('text field is invalid'))
        }
        if (typeof text !== 'string') return invErr()
        text = text.trim()
        if (text.length === 0) return invErr()
        if (text.length > 1024)
          return reject(new BadRequest('post text exceeds maxlength'))
        resolve(true)
      })
    },
  },
  page: {
    required: true,
    validate: (context, page) => {
      return new Promise((resolve, reject) => {
        const pages = context.app.service('pages')
        pages
          .get(page)
          .then(res => {
            const { _id, role } = context.params.user
            if (res.modsOnly && role !== 'admin') {
              const denied = () =>
                reject(
                  new Forbidden(`you do not have permission to post to ${page}`)
                )
              context.app
                .service('mods')
                .find({ query: { page, user: _id + '' } })
                .then(res => (res.total ? resolve(true) : denied()))
                .catch(() => denied())
            } else {
              resolve(true)
            }
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
    all: [authenticate('jwt'), objectifyId, datifyQuery],
    find: [],
    get: [],
    create: [
      checkRestrict,
      parseUpload,
      context => {
        const data = context.data
        if (data.text) data.text = badWordFilter(data.text)
        data.createdAt = new Date()
        data.createdBy = context.params.user._id + ''
        data.archived = false
        data.reported = false
        return context
      },
    ],
    update: [disable],
    patch: [
      checkRestrict,
      context => {
        return new Promise((resolve, reject) => {
          const { data } = context
          const keys = Object.keys(data)
          const numKeys = keys.length
          if (numKeys === 0) return reject(new BadRequest('nothing to update'))
          else if (numKeys > 1)
            return reject(new BadRequest('only one field can be updated'))

          const k = keys[0]
          const okFields = ['text', 'archived', 'reported']
          if (okFields.indexOf(k) < 0)
            return reject(new BadRequest('invalid field to update'))

          function validate() {
            if (k === 'text') {
              fields.text
                .validate(context, data.text)
                .catch(reject)
                .then(() => {
                  data.text = badWordFilter(data.text)
                  data.updatedBy = context.params.user._id + ''
                  data.updatedAt = new Date()
                  resolve(context)
                })
            } else if (k === 'archived') {
              // posts can only be archived currently not unarchived
              if (typeof data.archived !== 'boolean' || !data.archived)
                return reject(new BadRequest('invalid value for archived'))
              resolve(context)
            } else {
              // reported
              if (typeof data.reported !== 'boolean')
                return reject(new BadRequest('invalid value for reported'))

              if (data.reported) {
                context.app
                  .service('posts')
                  .get(context.id)
                  .then(res => {
                    if (res.reported) {
                      reject(new BadRequest('already reported'))
                    } else {
                      resolve(context)
                    }
                  })
                  .catch(reject)
              } else if (context.params.user.role !== 'admin')
                return reject(new Forbidden('Action not allowed'))
              else resolve(context)
            }
          } // validate()

          if (k !== 'reported') {
            const checkPerm = adminOwner(context)
            if (typeof checkPerm === 'undefined') {
              return validate()
            } else {
              checkPerm.then(validate).catch(reject)
            }
          } else validate()
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
      checkRmFile,
      context => {
        return new Promise(resolve => {
          const done = () => {
            resolve(context)
          }
          const { app, result } = context
          const multiple = Array.isArray(result)
          let rIdx = 0

          const rmPost = () => {
            let _id
            if (multiple && rIdx < result.length) {
              _id = result[rIdx]._id
              rIdx += 1
            } else if (result._id && rIdx === 0) {
              _id = result._id
              rIdx += 1
            } else return done()

            app
              .service('comments')
              .remove(null, {
                query: {
                  post: _id + '',
                },
              })
              .then(() => {
                return app.service('report').remove(_id)
              })
              .then(rmPost)
              .catch(rmPost)
          }
          rmPost()
        })
      },
    ],
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
