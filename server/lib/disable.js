const { MethodNotAllowed } = require('@feathersjs/errors')

module.exports = service => {
  return () => {
    throw new MethodNotAllowed(`not allowed on ${service} service`)
  }
}
