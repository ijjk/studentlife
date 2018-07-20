const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')

const disable = require('../../lib/disable')('resources')
const adminOnly = require('../../lib/adminOnly')
const checkFields = require('../../lib/checkFields')
const objectifyId = require('../../lib/objectifyId')
/*
  - fields
  label: the label of the resource
  link: link to the resource
*/
const fields = ['label', 'link']
const maxLens = [24, 1024]

const linkIsOk = (link, reject) => {
  const protocols = ['http', 'https']
  let pIdx = -1
  const protoIsVal = protocols.some(p => {
    pIdx += 1
    return link.indexOf(p + '://') > -1
  })

  if (!protoIsVal || link.split(protocols[pIdx] + '://')[1].length === 0)
    return reject(new BadRequest('link is invalid'))
}

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
          checkFields(data, fields, maxLens)
            .then(toKeep => {
              if (Object.keys(toKeep).length === 0)
                return reject(new BadRequest('no valid fields provided'))

              linkIsOk(toKeep.link, reject)
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
          checkFields(data, fields, maxLens, true).then(toKeep => {
            if (Object.keys(toKeep).length === 0)
              return reject(new BadRequest('nothing to update'))

            if (toKeep.link) linkIsOk(toKeep.link, reject)
            context.data = toKeep
            resolve(context)
          })
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
