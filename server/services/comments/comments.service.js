// Initializes the `comments` service on path `/comments`
const createService = require('feathers-mongodb')
const hooks = require('./comments.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  app.use('/comments', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('comments')

  mongoClient.then(db => {
    service.Model = db.collection('comments')
  })

  service.hooks(hooks)
}
