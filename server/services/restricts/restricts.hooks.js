const { authenticate } = require('@feathersjs/authentication').hooks
const { BadRequest } = require('@feathersjs/errors')
const adminOnly = require('../../lib/adminOnly')
const adminOwner = require('../../lib/adminOwner')('_id')
const objectifyId = require('../../lib/objectifyId')
const ObjectId = require('mongodb').ObjectId
const restricts = ['posting', 'updating_profile', 'making_pages']

const checkRestricts = context => {
  return new Promise((resolve, reject) => {
    const { data } = context
    const toKeep = {}

    if (!data._id) return reject(new BadRequest('_id not provided'))

    toKeep._id = ObjectId(data._id)

    restricts.forEach(r => {
      if (!data[r]) return
      if (typeof data[r] !== 'boolean' && !data[r])
        return reject(new BadRequest(`invalid value provided for ${r}`))
      toKeep[r] = data[r]
    })

    if (Object.keys(toKeep).length === 1)
      return reject(
        new BadRequest('no valid restrictions provided. should remove instead')
      )

    context.data = toKeep
    resolve(context)
  })
}

module.exports = {
  before: {
    all: [authenticate('jwt'), objectifyId],
    find: [adminOnly],
    get: [adminOwner],
    create: [adminOnly, checkRestricts],
    update: [adminOnly, checkRestricts],
    patch: [adminOnly, checkRestricts],
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
