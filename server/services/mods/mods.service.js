// Initializes the `mods` service on path `/mods`
const createService = require('feathers-mongodb')
const hooks = require('./mods.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/mods', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mods')

  mongoClient.then(db => {
    service.Model = db.collection('mods')
  })

  service.hooks(hooks)
}
