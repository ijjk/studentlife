import getStore from '../../store'
import { commentsService, postsService } from '../../../feathers/services'
import { getUpdateType, commentCreated, commentRemoved } from '../../actions'
import { POST_CREATED } from './createPost'
import { postRemoved } from './removePost'
import { loadUsers } from '../users/loadUsers'

// action types
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

// action methods
export const updateComment = ({ _id, ...changes }) =>
  commentsService.patch(_id, changes)

const loadPost = async _id => {
  const store = getStore()
  const { posts } = store.getState()
  if (posts[_id]) return
  const post = await postsService.get(_id)
  await loadUsers([post.createdBy])
  getStore().dispatch({ type: POST_CREATED, post })
}

export const checkRemovePost = _id => {
  const { posts } = getStore().getState()
  const { archived, reported } = posts
  const post = posts[_id]
  if (!post) return
  if (!archived && !reported) return
  if (post.archived === archived && post.reported === reported) return
  if (post.commentIds.length > 1) return
  postRemoved({ ...post, _id })
}

export const commentUpdated = ({ _id, post, ...comment }) => {
  const store = getStore()
  const type = getUpdateType({ _id, post, ...comment }, 'comment')

  switch (type) {
    case 'new': {
      return loadPost(post).then(() =>
        commentCreated({ _id, post, ...comment })
      )
    }
    case 'remove': {
      checkRemovePost(post)
      return commentRemoved({ _id, post })
    }
    case 'update': {
      return loadPost(post).then(() => {
        store.dispatch({
          type: UPDATE_COMMENT,
          postId: post,
          commentId: _id,
          comment,
        })
      })
    }
  }
}
