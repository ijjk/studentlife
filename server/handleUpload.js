const fs = require('fs')
const os = require('os')
const path = require('path')
const crypto = require('crypto')
const Busboy = require('busboy')
const auth = require('@feathersjs/authentication')
const {
  BadRequest,
  NotAuthenticated,
  GeneralError,
} = require('@feathersjs/errors')

function move(oldPath, newPath, callback, attempts) {
  if (!attempts) attempts = 0

  fs.rename(oldPath, newPath, function(err) {
    if (err) {
      if (err.code === 'EXDEV') {
        altMove()
      } else if (err.code === 'ENOENT' && attempts < 5) {
        // wait for stream to close and try again
        attempts += 1
        setTimeout(() => move(oldPath, newPath, callback, attempts), 100)
      } else {
        callback(err)
      }
      return
    }
    callback()
  })

  function altMove() {
    var readStream = fs.createReadStream(oldPath)
    var writeStream = fs.createWriteStream(newPath)

    readStream.on('error', callback)
    writeStream.on('error', callback)

    readStream.on('close', function() {
      fs.unlink(oldPath, callback)
    })

    readStream.pipe(writeStream)
  }
}

function getHash() {
  return crypto.randomBytes(8).toString('hex')
}

function checkErr() {
  // if(err) console.log(err);
}

module.exports = (req, res, next, settings, limits) => {
  const app = this // eslint-disable-line no-unused-vars
  let sentErr = false

  function errorRes(error) {
    sentErr = true
    return JSON.stringify(new BadRequest(error), null, 2)
  }

  auth.express.authenticate('jwt')(req, res, data => {
    if (data && data.code === 401) {
      res.status(401)
      res.end(JSON.stringify(new NotAuthenticated('NotAuthenticated'), null, 2))
      return
    }

    // catch busboy initialize errors
    let busboy

    try {
      busboy = new Busboy({
        headers: req.headers,
        limits: Object.assign(limits, {
          files: 1,
          fileSize: settings.maxSize,
        }),
      })
    } catch (err) {
      // busboy could not be initialized. might not be formdata let service handle
      return next()
    }

    let hasFile = false
    let mvDone = false
    let newFileName = ''
    let tmpPath = ''
    let finalPath = ''
    let removeUpload = false

    const checkDone = () => {
      if (hasFile) {
        if (!req.query.formData) req.query.formData = {}
        req.query.formData.newFileName = newFileName
        req.query.formData.newFilePath = finalPath
      }

      if (!sentErr && (mvDone || !hasFile)) next()
    }

    // clean up cancelled downloads
    req.on('close', () => {
      fs.unlink(tmpPath, checkErr)
    })

    // eslint-disable-next-line no-unused-vars
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      hasFile = true

      const parseFileExt = filename.split('.')
      const fileExt = parseFileExt
        .pop()
        .toLowerCase()
        .trim()

      if (fileExt.length === 0) {
        res.status(400)
        res.end(errorRes('filename does not contain an extension'))
        return
      }

      let hasValidExt = false
      const { allowedExts } = settings

      if (allowedExts.images.indexOf(fileExt) > -1) hasValidExt = true

      if (limits.allowOther && allowedExts.other.indexOf(fileExt) > -1)
        hasValidExt = true

      if (!hasValidExt) {
        res.status(400)
        res.end(errorRes('file type is not allowed'))
        return
      }

      let hash = getHash()
      newFileName = hash + '.' + fileExt
      tmpPath = path.join(os.tmpdir(), newFileName)
      finalPath = path.join(settings.path, newFileName)

      // check if a file already exists with the same name somehow
      function checkName() {
        fs.lstat(finalPath, err => {
          if (err === null) {
            hash = getHash()
            newFileName = hash + '.' + fileExt
            tmpPath = path.join(os.tmpdir(), newFileName)
            finalPath = path.join(settings.path, newFileName)
            checkName()
            return
          }

          file.on('limit', () => {
            fs.unlink(tmpPath, checkErr)

            res.status(413)
            res.end(errorRes('exceeded max file size'))
          })

          file.on('end', () => {
            if (removeUpload) {
              fs.unlink(tmpPath, checkErr)
              return
            }

            move(tmpPath, finalPath, err => {
              if (err) {
                res.status(500)
                res.end(
                  JSON.stringify(
                    new GeneralError('server encountered an error'),
                    null,
                    2
                  )
                )
                return
              }

              if (removeUpload) {
                fs.unlink(finalPath, checkErr)
              }
              mvDone = true
              checkDone()
            })
          })

          file.pipe(fs.createWriteStream(tmpPath))
        })
      }
      checkName()
    })

    busboy.on('field', (fieldname, val) => {
      if (val.trim().length === 0 || fieldname.trim().length === 0) {
        return
      }

      if (!req.query.formData) req.query.formData = {}
      req.query.formData[fieldname] = val
    })

    busboy.on('fieldsLimit', () => {
      res.status(400)
      res.end(errorRes('too many fields sent'))
    })

    busboy.on('filesLimit', () => {
      fs.unlink(finalPath, err => {
        if (err) {
          removeUpload = true
          return
        }
      })

      res.status(400)
      res.end(errorRes('more than one file sent'))
    })

    busboy.on('finish', checkDone)
    req.pipe(busboy)
  })
}
