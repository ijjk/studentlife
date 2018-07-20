import getStore from '../../store'
import { usersService } from '../../../feathers/services'

// action types
export const USER_REMOVED = 'USER_REMOVED'

// action methods
export const removeUser = _id => usersService.remove(_id)

export const removeUsers = ids => {
  const query = {
    _id: {
      $in: ids,
    },
  }
  return usersService.remove(null, { query })
}

export const userRemoved = ({ _id }) => {
  getStore().dispatch({ type: USER_REMOVED, userId: _id })
}
