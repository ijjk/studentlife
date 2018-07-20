import getStore from '../../store'
import { commentsService } from '../../../feathers/services'
import { checkRemovePost } from './updateComment'

// action types
export const COMMENT_REMOVED = 'COMMENT_REMOVED'

// action methods
export const removeComment = commentId => commentsService.remove(commentId)

export const commentRemoved = ({ _id, post }) => {
  const store = getStore()
  const { posts } = store.getState()
  if (!posts[post]) return
  checkRemovePost(post)
  store.dispatch({ type: COMMENT_REMOVED, postId: post, commentId: _id })
}
