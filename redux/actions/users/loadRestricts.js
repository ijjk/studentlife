import getStore from '../../store'
import getBatch from '../../../util/getBatch'
import { LOAD_USERS } from '../../actions'
import { restrictsService } from '../../../feathers/services'

// action methods
export const loadRestricts = () => {
  const store = getStore()
  const { users } = store.getState()
  const userIds = Object.keys(users)
  const ids = []

  // load blank restricts for all users
  userIds.forEach(id => {
    if (typeof users[id] === 'object' && users[id] && id !== users.curUser) {
      users[id].restricts = {}
      ids.push(id)
    }
  })

  const fetchBatch = () => {
    const batch = getBatch(ids, users)
    if (!batch.length) return Promise.resolve()

    const $or = batch.map(_id => ({ _id }))
    const query = { $or, $limit: $or.length }
    const curUsers = {}

    batch.forEach(id => {
      curUsers[id] = users[id]
    })

    return restrictsService
      .find({ query })
      .then(res => {
        res.data.forEach(restricts => {
          const { _id } = restricts
          delete restricts._id
          curUsers[_id].restricts = restricts
        })
      })
      .then(() => {
        store.dispatch({ type: LOAD_USERS, users: curUsers })
      })
      .then(() => fetchBatch())
  }
  return fetchBatch()
} // loadRestricts

export const clearRestricts = () => {
  const store = getStore()
  const { users } = store.getState()
  const userIds = Object.keys(users)

  userIds.forEach(id => {
    if (typeof users[id] === 'object' && users[id] && id !== users.curUser) {
      users[id].restricts = {}
    }
  })
  store.dispatch({ type: LOAD_USERS, users })
} // clearRestricts
