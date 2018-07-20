module.exports = function(io, app) {
  const logger = require('winston')
  const limiter = require('limiter').RateLimiter
  const proxyaddr = require('proxy-addr')

  const trust = proxyaddr.compile(app.get('trust proxy').split(/ *, */))

  const blockedConns = {}
  const triesPerPeriod = 5 // 5 tries per limitPeriod
  const limitPeriod = 5 * 60 * 1000 // 5 minutes
  // const onlineUsers = {}
  // const offlineTimeouts = {}
  // const onlineTimeouts = {}
  // const offlineHold = {}
  // const onlineHold = {}
  // const timeToOffline = 5000 // in milliseconds
  // const timeToOnline = 5000

  // function sendCurOnline(socket) {
  //   const _id = socket.userId
  //   const tmpOnline = Object.assign({}, onlineUsers)
  //   // remove current id from list because they don't need to know they're online...
  //   delete tmpOnline[_id]
  //   socket.emit('curOnline', Object.keys(tmpOnline))
  // }

  // function setOnline(socket) {
  //   const _id = socket.userId
  //   const sockId = socket.conn.id

  //   // check if offline update is set to send and delete it
  //   if (offlineTimeouts[_id]) {
  //     clearTimeout(offlineTimeouts[_id])
  //     delete offlineTimeouts[_id]
  //   }

  //   // check if sockId is already in online state
  //   if (onlineUsers[_id] && onlineUsers[_id][sockId]) {
  //     // technically didn't change anything but it is online so it should return true
  //     return true
  //   }
  //   // we know that current sock and id aren't in onlineUsers

  //   if (onlineUsers[_id]) {
  //     // user is already online, just add sock to current _id and sendCurOnline
  //     onlineUsers[_id][sockId] = true
  //     sendCurOnline(socket)
  //     return true
  //   }

  //   // create object for id and add sock to it
  //   onlineUsers[_id] = {}
  //   onlineUsers[_id][sockId] = true
  //   sendCurOnline(socket)

  //   // because this is a new state we need to check if we need to tell everyone

  //   // check if user has been set as offline.
  //   if (offlineHold[_id]) {
  //     delete offlineHold[_id]
  //     // don't prevent newOnline event from emitting because if a user comes online
  //     // within the offline timeout then they wont know they came back online
  //     // return true;
  //   }

  //   // check if there is already a time set to tell everyone all done
  //   if (onlineTimeouts[_id]) return true

  //   // set online hold to let offline emit know whether online emit has been sent
  //   onlineHold[_id] = true
  //   onlineTimeouts[_id] = setTimeout(() => {
  //     app.service('users').emit('newOnline', { _id })
  //     logger.info('sent newOnline for', _id, sockId)
  //     delete onlineTimeouts[_id]
  //     delete onlineHold[_id]
  //   }, timeToOnline)
  // } // end of setOnline

  // function setOffline(socket) {
  //   const _id = socket.userId
  //   const sockId = socket.conn.id

  //   if (!_id) return true

  //   // check if online update is set to send and delete it
  //   if (onlineTimeouts[_id]) {
  //     clearTimeout(onlineTimeouts[_id])
  //     delete onlineTimeouts[_id]
  //   }

  //   // check if sockId is not in online state
  //   if (!onlineUsers[_id] || !onlineUsers[_id][sockId]) {
  //     // technically didn't do anything but it is offline so its true
  //     return true
  //   }

  //   // check number of connections for _id
  //   const numCon = Object.keys(onlineUsers[_id]).length

  //   // if there are more than 1 connections just remove the current one
  //   if (numCon > 1) {
  //     delete onlineUsers[_id][sockId]
  //     return true
  //   }

  //   // this is the only connection delete _id form onlineUsers
  //   delete onlineUsers[_id]

  //   if (onlineHold[_id]) {
  //     delete onlineHold[_id]
  //     return true
  //   }

  //   // check if there is already and offline update set
  //   if (offlineTimeouts[_id]) return true

  //   // we need to set and update to let people know they went offline
  //   offlineHold[_id] = true
  //   offlineTimeouts[_id] = setTimeout(() => {
  //     app.service('users').emit('newOffline', { _id })
  //     logger.info('sent newOffline for', _id, sockId)
  //     delete offlineTimeouts[_id]
  //     delete offlineHold[_id]
  //   }, timeToOffline)
  // } // end of setOffline

  // set a curSock to allow modifying socket's data
  // let curSock

  // app.on('login', (token, loginData) => {
  //   if (!curSock || loginData.provider !== 'socketio') return
  //   const socket = curSock.nsp.sockets[loginData.socket.id]
  //   socket.userId = loginData.connection.user._id
  //   setOnline(socket)
  // })

  io.on('connection', socket => {
    const remoteAddr = proxyaddr(socket.conn.request, trust)

    if (blockedConns[remoteAddr]) {
      socket.send('too many login attempts')
      logger.info('connection blocked, too many login attempts')
      return socket.disconnect()
    }

    let socketLimiter
    if (process.env.NODE_ENV === 'production') {
      // setup limiter to keep track of auth attempts for this connection
      socketLimiter = new limiter(triesPerPeriod, limitPeriod)
    }

    // set ip so it's available in context.params
    socket.feathers.ip = remoteAddr
    // logger.info('New websocket connection from:', remoteAddr)

    // eslint-disable-next-line no-unused-vars
    socket.on('authenticate', data => {
      // if max attempts exceeded drop connection
      if (socketLimiter && !socketLimiter.tryRemoveTokens(1)) {
        logger.info('too many login attempts from', remoteAddr)
        socket.send('too many login attempts')
        // block reconnect until limitPeriod is over
        blockedConns[remoteAddr] = true
        setTimeout(() => delete blockedConns[remoteAddr], limitPeriod)
        return socket.disconnect()
      }

      // if (!data.accessToken) {
      //   if (data.email) curSock = socket
      //   return
      // }

      // app.passport
      //   .verifyJWT(data.accessToken, {
      //     secret: app.settings.authentication.secret,
      //   })
      //   .then(payload => {
      //     socket.userId = payload.userId
      //     setOnline(socket)
      //   })
      //   .catch(() => {})
    })

    // socket.on('logout', () => {
    //   logger.info(remoteAddr, 'logged out.')
    //   // delete socket.feather.user so they stop receiving events
    //   if (socket.feathers) {
    //     if (socket.feathers.user) delete socket.feathers.user
    //   }
    //   setOffline(socket)
    // })

    // socket.on('disconnect', () => {
    //   logger.info(remoteAddr, 'disconnected.')
    //   setOffline(socket)
    // })
  }) // end of on('connection')
}
