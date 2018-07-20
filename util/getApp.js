// if server side rendering return global app instance
// else return feathers client instance

const getApp = () => {
  if (typeof window !== 'undefined') {
    return require('../feathers/feathers').default
  }
  return global.app
}
export default getApp()
