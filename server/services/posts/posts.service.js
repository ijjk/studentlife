// Initializes the `posts` service on path `/posts`
const createService = require('feathers-mongodb')
const hooks = require('./posts.hooks')

module.exports = function(app) {
  const paginate = app.get('paginate')
  const mongoClient = app.get('mongoClient')
  const options = { paginate }

  // Initialize our service with any options it requires
  const handleUpload = require('../../handleUpload')

  // edit max number of fields here
  // current fields 'text' and 'page' with max size of 1024 bytes
  const busboyLimits = {
    fields: 2,
    fieldSize: 1024,
    allowOther: true,
  }

  app.post('/posts', (req, res, next) => {
    handleUpload(req, res, next, app.settings.upload, busboyLimits)
  })
  app.use('/posts', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts')

  mongoClient.then(db => {
    service.Model = db.collection('posts')
  })

  service.hooks(hooks)
}
