const { BadRequest } = require('@feathersjs/errors')

module.exports = toCheck => {
  return context => {
    return new Promise((resolve, reject) => {
      if (!context.params.provider)
        // it is being called internally
        return resolve(context)

      const { _id } = context.params.user
      context.app
        .service('restricts')
        .get(_id)
        .then(res => {
          if (res[toCheck])
            return reject(
              new BadRequest(`${toCheck} is disabled for your account`)
            )
          resolve(context)
        })
        .catch(() => {
          resolve(context)
        })
    })
  }
}
