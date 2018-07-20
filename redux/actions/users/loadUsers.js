import getStore from '../../store'
import getBatch from '../../../util/getBatch'
import {
  avatarsService,
  usersService,
  restrictsService,
} from '../../../feathers/services'

// action types
export const LOAD_USERS = 'LOAD_USERS'

// action methods
export const loadUsers = (userIds = [], fromLogin = false) => {
  const store = getStore()

  if (!Array.isArray(userIds)) {
    if (userIds) userIds = [userIds]
    else return Promise.reject('Array of ids not provided')
  }
  let isAdmin, userId
  const { users } = store.getState()

  if (!fromLogin) {
    const curUser = users[users.curUser]
    if (!curUser) return Promise.resolve() // fail gracefully
    isAdmin = curUser.isAdmin
  } else {
    userId = userIds[0]
  }

  const fetchBatch = () => {
    const batch = getBatch(userIds, users)
    if (!batch.length) return Promise.resolve()

    const $or = batch.map(_id => ({ _id }))
    const query = { $or, $limit: $or.length }
    const curUsers = {}

    return usersService
      .find({ query })
      .then(res => {
        if (fromLogin) {
          isAdmin = res.data[0].role === 'admin'
        }
        res.data.forEach(user => {
          const { _id } = user
          delete user._id
          delete user.password
          delete user.email

          if (fromLogin) {
            user.isAdmin = isAdmin
          }
          curUsers[_id] = user
          curUsers[_id].restricts = {}
        })
      })
      .then(() => avatarsService.find({ query }))
      .then(res => {
        res.data.forEach(avatar => {
          const { _id, file } = avatar
          curUsers[_id].avatar = file
        })
      })
      .then(() => {
        if (!isAdmin && fromLogin) {
          return restrictsService
            .get(userId)
            .then(restricts => ({ data: [restricts] }))
            .catch(() => ({ data: [] }))
        }
        return restrictsService.find({ query }).catch(() => ({ data: [] }))
      })
      .then(res => {
        res.data.forEach(restrict => {
          const { _id } = restrict
          delete restrict._id
          curUsers[_id].restricts = restrict
        })
      })
      .then(() => {
        store.dispatch({ type: LOAD_USERS, users: curUsers })
      })
      .then(() => fetchBatch())
  }
  return fetchBatch()
} // loadUsers
