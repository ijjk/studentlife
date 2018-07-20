import client from '@feathersjs/client'
import io from 'socket.io-client'
import { login, explainFail } from '../redux/actions'
import { serverUrl } from '../util/config'

const socket = io(serverUrl)

socket.on('connect', () => {
  login({ silent: true })
})

socket.on('message', data => {
  if (data === 'too many login attempts') {
    explainFail('Max login attempts reached. Try again in 5 minutes')
  }
})

const feathers = client()
  .configure(client.socketio(socket))
  .configure(
    client.authentication({
      path: '/auth',
      storageKey: 'jwt',
      storage: window.localStorage,
    })
  )

export default feathers
