import getStore from '../../store'
import { loadPages } from '../../actions'
import { pagesService } from '../../../feathers/services'
import getSort from '../../../util/getSort'
import getError from '../../../util/getError'

// action types
export const LIST_PAGES_PENDING = 'LIST_PAGES_PENDING'
export const LIST_PAGES_FAIL = 'LIST_PAGES_FAIL'
export const LIST_PAGES_SUCCESS = 'LIST_PAGES_SUCCESS'

// action methods
export const listPages = ({ sort = null, $limit = 16, initial = false }) => {
  const store = getStore()
  const { toList, ...pages } = store.getState().pages
  if (!sort) {
    sort = pages.sort
  }
  store.dispatch({ type: LIST_PAGES_PENDING, sort, initial })

  const query = {
    $limit,
    default: false,
    $select: ['_id'],
    $sort: getSort(sort),
    $skip: initial ? 0 : toList.length,
  }
  let ids = [],
    hasMore = false
  return pagesService
    .find({ query })
    .then(res => {
      hasMore = query.$skip + res.data.length < res.total
      ids = res.data.map(({ _id }) => _id)
      return loadPages([...ids])
    })
    .then(() => {
      store.dispatch({ type: LIST_PAGES_SUCCESS, toList: ids, hasMore })
    })
    .catch(err => {
      store.dispatch({
        type: LIST_PAGES_FAIL,
        error: getError(err, 'An error occurred loading pages'),
      })
    })
}
