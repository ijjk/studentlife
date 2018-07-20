import getStore from '../../store'
import { usersService } from '../../../feathers/services'
import { loadRestricts, clearRestricts } from '../../actions'

// action types
export const USER_UPDATED = 'USER_UPDATED'

// action methods
export const updateUser = ({ _id, ...user }) => usersService.patch(_id, user)

export const userUpdated = async ({ _id, ...user }) => {
  const store = getStore()
  const { users } = store.getState()
  if (_id === users.curUser && user.role) {
    const isAdmin = user.role === 'admin'

    if (users[users.curUser].isAdmin !== isAdmin) {
      if (isAdmin) {
        await loadRestricts()
      } else {
        await clearRestricts()
      }
      user.isAdmin = isAdmin
    }
  }
  store.dispatch({ type: USER_UPDATED, userId: _id, user })
}
