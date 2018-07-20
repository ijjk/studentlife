const authentication = require('@feathersjs/authentication')
const jwt = require('@feathersjs/authentication-jwt')
const local = require('@feathersjs/authentication-local')

module.exports = function() {
  const app = this
  const config = app.get('authentication')

  // Set up authentication
  app.configure(authentication(config))
  app.configure(jwt())
  app.configure(local())

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('auth').hooks({
    before: {
      create: [
        context => {
          if (context.data.password) {
            context.data.password += '' // make sure its a string
          }
        },
        authentication.hooks.authenticate(config.strategies),
      ],
      remove: [authentication.hooks.authenticate('jwt')],
    },
  })
}
