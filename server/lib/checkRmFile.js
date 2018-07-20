const doDel = require('./doDel')

module.exports = context => {
  return new Promise(resolve => {
    const done = () => resolve(context)
    let data = context.result || context.data
    let rIdx = 0
    const isArr = Array.isArray(data)

    const checkOne = () => {
      let file

      if (isArr && rIdx < data.length) {
        file = data[rIdx].file
        rIdx += 1
      } else if (data.file && rIdx === 0) {
        file = data.file
        rIdx += 1
      } else return done()

      if (!file) return checkOne()
      doDel(file, context).then(checkOne)
    }
    checkOne()
  })
}
