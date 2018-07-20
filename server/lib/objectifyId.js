const ObjectID = require('mongodb').ObjectID
const idIsValid = _id => typeof _id === 'string' && _id.length === 24

module.exports = context => {
  return new Promise(resolve => {
    const { query } = context.params
    const done = () => resolve(context)
    if (!query) return done()
    const queryKeys = Object.keys(query)
    if (queryKeys.length === 0) return done()

    const checkId = (val, key) => {
      if (idIsValid(val)) return (query[key] = ObjectID(query[key]))
      else if (Array.isArray(val)) {
        val.forEach(subVal => {
          if (idIsValid(subVal._id)) subVal._id = ObjectID(subVal._id)
        })
      } else if (typeof val === 'object') {
        const subKeys = Object.keys(val)
        subKeys.forEach(subKey => {
          const subVal = query._id[subKey]
          if (idIsValid(subVal)) query._id[subKey] = ObjectID(subVal)
          else if (Array.isArray(subVal))
            query._id[subKey] = subVal.map(item => ObjectID(item))
        })
      }
    }

    queryKeys.forEach(key => {
      const val = query[key]
      if (key === '_id') checkId(val, key)
      else if (key === '$or' && Array.isArray(val)) {
        val.forEach(item => {
          if (item._id && idIsValid(item._id)) {
            item._id = ObjectID(item._id)
          }
        })
      }
    })
    done()
  })
}
