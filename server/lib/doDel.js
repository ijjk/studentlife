const fs = require('fs')
const path = require('path')

module.exports = (file, context) => {
  return new Promise(resolve => {
    const uploadDir = context.app.settings.upload.path
    const uploadedFile = path.join(uploadDir, file)

    fs.unlink(uploadedFile, () => {
      resolve()
    })
  })
}
