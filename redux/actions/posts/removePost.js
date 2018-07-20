import getStore from '../../store'
import { postsService } from '../../../feathers/services'
import { homePageId } from '../../../util/config'

// action types
export const POST_REMOVED = 'POST_REMOVED'

// action methods
export const removePost = postId => postsService.remove(postId)

export const postRemoved = ({ _id, page }) => {
  const store = getStore()
  const { curPage } = store.getState().pages
  if (curPage !== page && curPage !== homePageId) {
    return // removal is irrelevant currently
  }
  store.dispatch({ type: POST_REMOVED, postId: _id })
}
