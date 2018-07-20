// Initializes the `contact` service on path `/contact`
const createService = require('feathers-mongodb')
const hooks = require('./contact.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/contact', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('contact')

  mongoClient.then(db => {
    service.Model = db.collection('contact')
  })

  service.hooks(hooks)
}
