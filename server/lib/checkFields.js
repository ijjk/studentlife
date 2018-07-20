const { BadRequest } = require('@feathersjs/errors')

module.exports = function(data, fields, maxLens, ignoreMissing) {
  return new Promise((resolve, reject) => {
    const toKeep = {}
    fields.some((field, idx) => {
      let val = data[field]

      const missing = () => {
        reject(new BadRequest(`${field} is required`))
        return true
      }

      if (!val) {
        if (!ignoreMissing) return missing()
        else return false
      }

      if (val.trim().length === 0) {
        if (!ignoreMissing) return missing()
        else return false
      }

      val = val.trim()
      if (maxLens[idx] && data[field].length > maxLens[idx]) {
        reject(new BadRequest(`${field} exceeded maxlength`))
        return true
      }

      toKeep[field] = val
      return false
    })
    resolve(toKeep)
  })
}
