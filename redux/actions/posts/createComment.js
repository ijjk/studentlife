import getStore from '../../store'
import { commentsService } from '../../../feathers/services'
import { loadUsers } from '../users/loadUsers'
import { getUpdateType } from './updatePost'

// action types
export const COMMENT_CREATED = 'COMMENT_CREATED'

// action methods
export const createComment = ({ text, postId }) =>
  commentsService.create({ text, post: postId })

export const commentCreated = ({ post, ...comment }) => {
  const type = getUpdateType({ post, ...comment }, 'comment')
  if (type !== 'new' && type !== 'update') {
    return // ignore since it's not valid in current state
  }
  loadUsers([comment.createdBy]).then(() => {
    getStore().dispatch({ type: COMMENT_CREATED, postId: post, comment })
  })
}
