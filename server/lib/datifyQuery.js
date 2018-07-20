// mongodb needs a Date object to query against
// so convert time string to date object

// list of query params to look for time strings
const toConv = ['createdAt']

module.exports = context => {
  return new Promise(resolve => {
    const { query } = context.params
    const done = () => resolve(context)
    if (typeof query !== 'object') return done()
    const params = Object.keys(query)
    const numParams = params.length

    if (numParams === 0) return done()

    params.forEach(p => {
      if (toConv.indexOf(p) < 0) return
      const param = query[p]
      if (typeof param === 'object' && !(param instanceof Date)) {
        const subParams = Object.keys(param)
        subParams.forEach(sp => {
          param[sp] = new Date(param[sp])
        })
      } else query[p] = new Date(param)
    })
    done()
  })
}
