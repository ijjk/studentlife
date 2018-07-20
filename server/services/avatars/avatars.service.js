// Initializes the `avatars` service on path `/avatars`
const createService = require('feathers-mongodb')
const hooks = require('./avatars.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  const handleUpload = require('../../handleUpload')

  // no non-file fields needed
  const busboyLimits = {
    fields: 0,
    fieldSize: 0,
  }

  app.post('/avatars', (req, res, next) => {
    handleUpload(req, res, next, app.settings.upload, busboyLimits)
  })
  app.use('/avatars', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('avatars')

  mongoClient.then(db => {
    service.Model = db.collection('avatars')
  })

  service.hooks(hooks)
}
