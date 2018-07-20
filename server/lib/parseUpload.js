const fs = require('fs')
const { BadRequest } = require('@feathersjs/errors')

module.exports = fields => {
  return context => {
    return new Promise((resolve, reject) => {
      const numKeys = obj => {
        return Object.keys(obj).length
      }

      const formData = context.params.query.formData
      const data = context.data
      const noContent = 'post has no content'
      const unPermField = 'post has an unpermitted field'
      const numFields = numKeys(fields)
      const dataKeys = Object.keys(data)
      const numDataKeys = dataKeys.length

      // remove uploaded file if post rejected
      const rejectIt = err => {
        if (formData && formData.newFilePath) {
          fs.unlink(formData.newFilePath, () => {
            // if(err) console.error(err);
          })
        }
        reject(err)
      }

      if (!formData && numDataKeys === 0)
        return rejectIt(new BadRequest(noContent))
      else if (formData && numKeys(formData) === 0 && numDataKeys === 0)
        return rejectIt(new BadRequest(noContent))

      let dataKeysChecked = 0
      const awaitDataKeys = () => {
        return new Promise(resolveDk => {
          let waitingValidate = false

          const checkDkDone = () => {
            dataKeysChecked += 1
            if (dataKeysChecked >= numDataKeys) resolveDk()
          }

          if (numDataKeys === 0) return resolveDk()

          dataKeys.forEach(key => {
            if (!fields[key]) return rejectIt(new BadRequest(unPermField))

            if (fields[key].validate) {
              waitingValidate = true

              fields[key]
                .validate(context, data[key])
                .then(() => {
                  checkDkDone()
                })
                .catch(err => {
                  rejectIt(new BadRequest(err))
                })
            } else checkDkDone()
          }) // end of .forEach

          if (!waitingValidate) checkDkDone()
        }) // end of awaitDataKeys
      }

      awaitDataKeys().then(() => {
        let numNotDone = numFields
        const checkDone = () => {
          numNotDone -= 1

          if (numNotDone <= 0) {
            let containsNonReqOrFile = false

            Object.keys(data).some(key => {
              if (key !== 'file' && fields[key].required) return false
              containsNonReqOrFile = true
              return true
            })

            if (!containsNonReqOrFile)
              return rejectIt(new BadRequest(noContent))

            resolve(context)
          }
        }

        if (formData && formData.newFileName) data.file = formData.newFileName

        if (numFields === 0) checkDone()

        Object.keys(fields).forEach(key => {
          const field = fields[key]
          let val

          if (formData && formData[key]) val = formData[key]

          if (val) {
            val = val.trim()

            if (field.validate) {
              field
                .validate(context, val)
                .then(() => {
                  data[key] = val
                  checkDone()
                })
                .catch(err => {
                  rejectIt(err)
                })
            } else {
              data[key] = val
              checkDone()
            }
          } else if (field.required && !data[key])
            rejectIt(new BadRequest(`missing required field ${key}`))
          else checkDone()
        })
      }) // end of .then
    }) // end of main promise
  }
}
