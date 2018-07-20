module.exports = function(app) {
  if (typeof app.channel !== 'function') {
    // If no real-time functionality has been configured just return
    return
  }

  app.on('connection', connection => {
    // On a new real-time connection, add it to the anonymous channel
    app.channel('anonymous').join(connection)
  })

  app.on('login', (authResult, { connection }) => {
    // connection can be undefined if there is no
    // real-time connection, e.g. when logging in via REST
    if (connection) {
      // Obtain the logged in user from the connection
      // const user = connection.user;

      // The connection is no longer anonymous, remove it
      app.channel('anonymous').leave(connection)

      // Add it to the authenticated user channel
      app.channel('authenticated').join(connection)
    }
  })

  app.on('logout', (authResult, { connection }) => {
    if (connection) {
      app.channel('authenticated').leave(connection)
      app.channel('anonymous').join(connection)
    }
  })

  // eslint-disable-next-line no-unused-vars
  app.publish((data, hook) => {
    // Here you can add event publishers to channels set up in `channels.js`
    // To publish only for a specific event use `app.publish(eventname, () => {})`

    // e.g. to publish all service events to all authenticated users use
    return app.channel('authenticated')
  })

  // filter out newOnline events from being sent to the user they're about
  app.service('users').publish('newOnline', data => {
    return app.channel('authenticated').filter(connection => {
      return connection.user._id + '' !== data._id + ''
    })
  })

  // only send restricts updates to the user they are about and admins
  // eslint-disable-next-line no-unused-vars
  app.service('restricts').publish((data, context) => {
    return app.channel('authenticated').filter(connection => {
      return (
        connection.user._id + '' === data._id + '' ||
        connection.user.role === 'admin'
      )
    })
  })

  // only send contact message updates to admins
  // eslint-disable-next-line no-unused-vars
  app.service('contact').publish(data => {
    return app.channel('authenticated').filter(connection => {
      return connection.user.role === 'admin'
    })
  })
} // end
