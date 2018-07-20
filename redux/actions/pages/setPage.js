import getStore from '../../store'
import { loadPages } from '../../actions'

// action types
export const SET_PAGE = 'SET_PAGE'

// action methods
export const setPage = pageId => {
  const store = getStore()
  const { pages, users } = store.getState()
  if (pages.curPage === pageId || !users.curUser) {
    return Promise.resolve()
  }
  return loadPages(pageId).then(() => {
    store.dispatch({ type: SET_PAGE, pageId })
  })
}
