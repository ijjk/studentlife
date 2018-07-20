module.exports = {
  ...(typeof window !== 'undefined'
    ? window.publicConfig
    : app.get('publicConfig')),
}
