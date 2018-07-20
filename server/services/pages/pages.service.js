// Initializes the `pages` service on path `/pages`
const createService = require('feathers-mongodb')
const hooks = require('./pages.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/pages', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pages')

  mongoClient.then(db => {
    service.Model = db.collection('pages')
  })

  service.hooks(hooks)
}
