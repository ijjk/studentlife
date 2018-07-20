#!/usr/bin/env node
/* eslint-disable no-console */
// Dynamically build ./util/icons.js fontawesome icons library
const fs = require('fs')
const path = require('path')
const output = path.join(__dirname, 'util', 'icons.js')

const freeSolid = [
  'faUser',
  'faIdCard',
  'faEnvelope',
  'faChevronLeft',
  'faChevronRight',
  'faChevronUp',
  'faGlobe',
  'faUserCircle',
  'faSearch',
  'faCaretDown',
  'faLock',
  'faEye',
  'faEyeSlash',
  'faFile',
  'faHome',
  'faBullhorn',
  'faCalendarAlt',
  'faFileAlt',
  'faExternalLinkAlt',
  'faHandshake',
  'faCog',
  'faTrash',
  'faEllipsisV',
  'faFilePdf',
  'faFileWord',
  'faFileExcel',
  'faFilePowerpoint',
  'faDownload',
  'faUserPlus',
  'faExclamationCircle',
  'faList',
  'faUsers',
  'faUndo',
  'faPencilAlt',
]

const freeBrands = [
  'faFacebookSquare',
  'faTwitterSquare',
  'faPinterestSquare',
  'faInstagram',
  'faYoutube',
]

let data = `/*
  This file is dynamically generated. Edit ../genIcons.js instead
*/
import fontawesome from '@fortawesome/fontawesome'
fontawesome.config.autoAddCss = false
`

freeSolid.forEach(icon => {
  data += `import ${icon} from '@fortawesome/fontawesome-free-solid/${icon}'\n`
})

freeBrands.forEach(icon => {
  data += `import ${icon} from '@fortawesome/fontawesome-free-brands/${icon}'\n`
})

data += 'fontawesome.library.add('

const allIcons = freeSolid.concat(freeBrands)
allIcons.forEach((icon, idx) => {
  if (idx !== 0) {
    data += ', '
  }
  data += icon
})

data += ')'

fs.writeFile(output, data, err => {
  if (err) return console.error(err)
  console.log('Icons library updated!')
})
