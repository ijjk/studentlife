const fs = require('fs-extra')
const path = require('path')
const { parse } = require('url')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const compress = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const logger = require('winston')

const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const configuration = require('@feathersjs/configuration')
const rest = require('@feathersjs/express/rest')
const socketio = require('@feathersjs/socketio')

const middleware = require('./middleware')
const services = require('./services')
const appHooks = require('./app.hooks')
const channels = require('./channels')

const authentication = require('./authentication')
const mongodb = require('./mongodb')

const branding = require('../config/branding.json')
const dev = process.env.NODE_ENV !== 'production'
const nextJS = require('next')({ dev, quiet: true })
const nextHandler = nextJS.getRequestHandler()

const app = express(feathers())
global.app = app

app.run = async port => {
  const server = app.listen(port)
  await nextJS.prepare()

  if (dev) {
    server.on('upgrade', (req, socket) => {
      nextHandler(req, socket, parse(req.url, true))
    })
  }
  return server
}

app.set('x-powered-by', false)
// allow trusting X-Forwarded-For header from local proxy
app.set('trust proxy', 'loopback, linklocal, uniquelocal')

// Load app configuration
app.configure(configuration())

const uploadConf = Object.assign({}, app.get('upload'))
delete uploadConf.path
const publicConfig = {
  ...uploadConf,
  ...branding,
  maxResults: app.get('paginate').max,
}

// check if setup has been completed
try {
  fs.statSync(path.join(__dirname, '..', '.didSetup'))
} catch (err) {
  publicConfig.doSetup = true
}

const configFields = [
  'serverUrl',
  'uploadsUrl',
  'homePageId',
  'newsPageId',
  'defaultAvatar',
  'defaultNewsThumb',
]
configFields.forEach(field => {
  publicConfig[field] = app.get(field)
})
app.set('publicConfig', publicConfig)

// Enable CORS, security, compression, favicon and body parsing
app.use(cors())
app.use(helmet())
app.use(compress())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
app.use('/', express.static(app.get('public'))) // Host the public folder

// only rate limit in production
if (process.env.NODE_ENV === 'production') {
  const authLimit = new rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minute window
    delayAfter: 2, // begin slowing down responses after the first request
    delayMs: 2 * 1000, // slow down subsequent responses by 2 seconds per request
    max: 5, // start blocking after 5 requests,
    message: 'too many login attempts',
  })
  const contactLimit = new rateLimit({
    windowMs: 10 * 60 * 1000,
    delayAfter: 1,
    delayMs: 2 * 1000,
    max: 3,
    message: 'too many messages',
  })

  app.use('/auth/', authLimit) // limit auth attempts per ip
  app.use('/contact/', contactLimit)
}
app.configure(rest())

// set ip so it's available in context.params
app.use((req, res, next) => {
  const ip = req.ips[0] || req.ip
  req.feathers.ip = ip
  next()
})

const handleOnline = require('./handleOnline')

app.configure(
  socketio(io => {
    handleOnline(io, app)
  })
)

app.configure(mongodb)

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware)
app.configure(authentication)

// Set up our services (see `services/index.js`)
app.configure(services)

// Configure channels which is a replacement to filters
app.configure(channels)

// setup global hooks
app.hooks(appHooks)

app.use(cookieParser())
app.use((req, res, next) => {
  const { jwt } = req.cookies
  if (!jwt) return next()

  return app.passport
    .verifyJWT(jwt, {
      secret: app.get('authentication').secret,
    })
    .then(payload => {
      req.userId = payload.userId
      next()
    })
    .catch(() => next())
})

// setup next handler
const notFound = express.notFound()
app.use((req, res, next) => {
  const accept = req.get('accept')
  if (
    typeof accept === 'string' &&
    accept.toLowerCase() === 'application/json'
  ) {
    return notFound(req, res, next)
  }
  nextHandler(req, res, parse(req.url, true))
})

app.use(express.errorHandler({ logger }))

module.exports = app
