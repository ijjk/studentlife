import app from '../../util/getApp'
import { userUpdated } from '../../redux/actions'

export const avatarsService = app.service('avatars')

if (typeof window !== 'undefined') {
  avatarsService.on('created', ({ _id, file }) =>
    userUpdated({ _id, avatar: file })
  )
  avatarsService.on('removed', ({ _id }) => userUpdated({ _id, avatar: null }))
}
