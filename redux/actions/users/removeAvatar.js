import getStore from '../../store'
import { avatarsService } from '../../../feathers/services'

// action methods
export const removeAvatar = () => {
  const { users } = getStore().getState()
  return avatarsService.remove(users.curUser)
}

export const removeAvatars = ids => {
  const query = {
    _id: {
      $in: ids,
    },
  }
  return avatarsService.remove(null, { query })
}
