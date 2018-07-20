// Initializes the `page-thumbs` service on path `/page-thumbs`
const createService = require('feathers-mongodb')
const hooks = require('./page-thumbs.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  const handleUpload = require('../../handleUpload')

  // 1 non-file field needed
  const busboyLimits = {
    fields: 1,
    fieldSize: 1024,
  }

  app.post('/page-thumbs', (req, res, next) => {
    handleUpload(req, res, next, app.settings.upload, busboyLimits)
  })
  app.use('/page-thumbs', createService(options))
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('page-thumbs')

  mongoClient.then(db => {
    service.Model = db.collection('page-thumbs')
  })

  service.hooks(hooks)
}
