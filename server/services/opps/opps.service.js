// Initializes the `opps` service on path `/opps`
const createService = require('feathers-mongodb')
const hooks = require('./opps.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/opps', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('opps')

  mongoClient.then(db => {
    service.Model = db.collection('opps')
  })

  service.hooks(hooks)
}
