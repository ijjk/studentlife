const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')

const disable = require('../../lib/disable')('contact')
const adminOnly = require('../../lib/adminOnly')
const objectifyId = require('../../lib/objectifyId')
const datifyQuery = require('../../lib/datifyQuery')
const checkFields = require('../../lib/checkFields')

const onlyAdmin = [authenticate('jwt'), adminOnly]
const fields = ['name', 'email', 'msg']
const maxLens = [128, 320, 1024]

const verifyMsg = context => {
  return new Promise((resolve, reject) => {
    const { data } = context

    // block contact messages from socketio to allow
    // easier throttling
    if (context.params.provider === 'socketio') {
      return reject(new BadRequest('can not create message over websocket'))
    }

    const badEmail = () => {
      return reject(new BadRequest('email is invalid'))
    }

    checkFields(data, fields, maxLens, false)
      .then(toKeep => {
        const { email } = toKeep
        if (email.indexOf('@') < 0) return badEmail()

        const parts = email.split('@')
        if (parts[0].length === 0 || parts[0].length > 64) return badEmail()
        if (parts[1].length > 256) return badEmail()
        if (parts[1].indexOf('.') < 0) return badEmail()

        const domain = parts[1].split('.').map(p => p.trim())
        if (domain[0].length === 0) return badEmail()
        if (domain[1].length === 0) return badEmail()

        toKeep.createdAt = new Date()
        context.data = toKeep
        resolve(context)
      })
      .catch(reject)
  })
}

module.exports = {
  before: {
    all: [objectifyId, datifyQuery],
    find: onlyAdmin,
    get: onlyAdmin,
    create: [verifyMsg],
    update: [disable],
    patch: [disable],
    remove: onlyAdmin,
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
