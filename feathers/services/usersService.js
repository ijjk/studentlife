import app from '../../util/getApp'
import { userUpdated, userRemoved } from '../../redux/actions'

export const usersService = app.service('users')

if (typeof window !== 'undefined') {
  usersService.on('patched', user => userUpdated(user))
  usersService.on('removed', user => userRemoved(user))
}
