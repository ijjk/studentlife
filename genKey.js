#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const key = crypto.randomBytes(256).toString('hex')
let confFile = 'default.json'

if (
  process.env.NODE_ENV &&
  process.env.NODE_ENV.toLowerCase() === 'production'
) {
  confFile = 'production.json'
}

let config = require('./config/' + confFile)
let configPath = path.join(__dirname, 'config', confFile)

config.authentication.secret = key

fs.writeFile(configPath, JSON.stringify(config, null, 2) + '\n', err => {
  if (err) return console.error(err)
  console.log('\nAuthentication secret successfully updated in', confFile)
})
