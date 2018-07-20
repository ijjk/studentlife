// Initializes the `oppsCat` service on path `/opps-cats`
const createService = require('feathers-mongodb')
const hooks = require('./opps-cats.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/opps-cats', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('opps-cats')

  mongoClient.then(db => {
    service.Model = db.collection('opps-cats')
  })

  service.hooks(hooks)
}
