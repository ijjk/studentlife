// Initializes the `restricts` service on path `/restricts`
const createService = require('feathers-mongodb')
const hooks = require('./restricts.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/restricts', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('restricts')

  mongoClient.then(db => {
    service.Model = db.collection('restricts')
  })

  service.hooks(hooks)
}
