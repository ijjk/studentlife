import getStore from '../store'
import getError from '../../util/getError'
import { loadPages, loadUsers } from '../actions'
import { pagesService, usersService } from '../../feathers/services'

// action types
export const SEARCH_FAIL = 'SEARCH_FAIL'
export const SEARCH_PENDING = 'SEARCH_PENDING'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

// action methods
let searchTimeout,
  searchIdx = 0
const searchTime = 275 // time to wait doing search

export const doSearch = searchQ => {
  const store = getStore()
  clearTimeout(searchTimeout)
  searchIdx++
  const curIdx = searchIdx

  if (!searchQ.length) {
    return store.dispatch({
      type: SEARCH_SUCCESS,
      searchQ,
      results: [],
    })
  }

  searchTimeout = setTimeout(() => {
    store.dispatch({ type: SEARCH_PENDING })
    const $select = ['_id']
    const $limit = 3 // only get 3 from each
    const pagesQ = {
      $limit,
      $select,
      default: false,
      $sort: { name: 1 },
      name: { $search: searchQ },
    }
    const userSearch =
      searchQ.indexOf('@') > -1 ? searchQ.replace('@', '') : searchQ

    const usersQ = {
      $limit,
      $select,
      $sort: { firstName: 1 },
      $or: ['firstName', 'lastName', 'username'],
    }
    usersQ.$or = usersQ.$or.map(field => ({ [field]: { $search: userSearch } }))

    if (userSearch.indexOf(' ') > -1) {
      // if the search contains a space try searching by first and last
      const userParts = userSearch.split(' ')
      usersQ.$or.push({ firstName: { $search: userParts[0] } })
      usersQ.$or.push({ lastName: { $search: userParts[1] } })
    }
    const pageIds = []
    const userIds = []
    const results = []

    pagesService
      .find({ query: pagesQ })
      .then(res => {
        res.data.forEach(({ _id }) => pageIds.push(_id))
        if (!res.total) usersQ.$limit *= 2
      })
      .then(() => loadPages([...pageIds]))
      .then(() => usersService.find({ query: usersQ }))
      .then(res => {
        res.data.forEach(({ _id }) => userIds.push(_id))
      })
      .then(() => loadUsers([...userIds]))
      .then(() => {
        const { pages, users } = store.getState()
        pageIds.forEach(_id => {
          if (pages[_id]) {
            const { name, thumb } = pages[_id]
            results.push({
              type: 'page',
              _id,
              name,
              thumb,
            })
          }
        })
        userIds.forEach(_id => {
          if (users[_id]) {
            const { firstName, lastName, username, avatar } = users[_id]
            results.push({
              type: 'user',
              _id,
              avatar,
              username,
              lastName,
              firstName,
            })
          }
        })
      })
      .then(() => {
        if (searchIdx !== curIdx) return
        store.dispatch({
          type: SEARCH_SUCCESS,
          searchQ,
          results,
        })
      })
      .catch(err => {
        store.dispatch({
          type: SEARCH_FAIL,
          error: getError(err, 'An error occurred during search'),
        })
      })
  }, searchTime)
}
