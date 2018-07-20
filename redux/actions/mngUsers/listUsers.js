import getStore from '../../store'
import getError from '../../../util/getError'
import { loadUsers } from '../../actions'
import { usersService } from '../../../feathers/services'

// action types
export const LIST_USERS_FAIL = 'LIST_USERS_FAIL'
export const LIST_USERS_SUCCESS = 'LIST_USERS_SUCCESS'
export const LIST_USERS_PENDING = 'LIST_USERS_PENDING'
export const LIST_USERS_MORE_PENDING = 'LIST_USERS_MORE_PENDING'

// action methods
export const listUsers = ({ initial = false, filter }) => {
  const store = getStore()
  const { mngUsers, users } = store.getState()
  const { curUser } = users
  const { ids } = mngUsers

  if (!users[curUser] || !users[curUser].isAdmin) {
    return Promise.resolve() // fail gracefully
  }
  let hasMore
  const curIds = []
  const query = {
    $limit: 32,
    $select: ['_id'],
    $sort: { lastName: 1 },
    $skip: initial ? 0 : ids.length,
  }

  let toSearch = {}
  if (filter) {
    filter.split(',').forEach(search => {
      search = search.trim()
      if (search.substr(0, 1) === '@') {
        search = search.substr(1)
      }
      toSearch[search] = true
    })
    toSearch = Object.keys(toSearch)
    const fields = ['firstName', 'lastName', 'username']
    const $or = []
    toSearch.forEach($search => {
      fields.forEach(field => {
        $or.push({ [field]: { $search } })
      })
    })
    query.$or = $or
  }

  store.dispatch({
    type: initial ? LIST_USERS_PENDING : LIST_USERS_MORE_PENDING,
    filter,
  })

  return usersService
    .find({ query })
    .then(res => {
      res.data.forEach(({ _id }) => curIds.push(_id + ''))
      hasMore = res.total > res.data.length + ids.length
    })
    .then(() => loadUsers([...curIds]))
    .then(() => {
      store.dispatch({
        type: LIST_USERS_SUCCESS,
        hasMore,
        ids: curIds,
      })
    })
    .catch(err => {
      store.dispatch({
        type: LIST_USERS_FAIL,
        error: getError(err, 'An error occurred listing users'),
      })
    })
}
