import getStore from '../../store'
import { postCreated, postRemoved } from '../../actions'
import { postsService } from '../../../feathers/services'
import { loadPages } from '../pages/loadPages'

// action types
export const POST_UPDATED = 'POST_UPDATED'

// action methods
export const updatePost = ({ _id, ...changes }) =>
  postsService.patch(_id, changes)

export const getUpdateType = (item = {}, itemType = 'post') => {
  const store = getStore()
  const { posts } = store.getState()
  const { archived, reported } = posts
  const prevPostId = itemType === 'post' ? item._id : item.post
  const prevPost = posts[prevPostId]
  let prevItem

  if (prevPost) {
    prevItem = itemType === 'post' ? prevPost : prevPost.comments[item._id]
  }

  // check if post's state changed or if content just changed
  if (
    prevItem &&
    prevItem.archived === item.archived &&
    prevItem.reported === item.reported
  ) {
    return 'update'
  }

  if (reported && typeof item.reported !== 'undefined') {
    if (item.reported) {
      // if prevItem exists update it
      return prevItem ? 'update' : 'new'
    }
    return hasValidComments(item._id) ? 'update' : 'remove'
  }

  if (archived) {
    return item.archived ? 'new' : 'remove'
  } else if (item.archived) {
    return 'remove'
  }

  return 'update'
}

export const hasValidComments = _id => {
  const store = getStore()
  const { posts } = store.getState()
  const { archived, reported } = posts
  if (!posts[_id]) return
  if (!archived && !reported) return

  let which = 'reported'
  if (!reported) which = 'archived'
  const { commentIds, comments } = posts[_id]

  return commentIds.some(commentId => comments[commentId][which])
}

export const postUpdated = ({ _id, ...post }) => {
  const store = getStore()
  const type = getUpdateType({ _id, ...post })

  switch (type) {
    case 'new': {
      return loadPages([post.page]).then(() => {
        postCreated({ _id, ...post })
      })
    }
    case 'remove': {
      if (!hasValidComments(_id)) {
        return postRemoved({ _id, page: post.page })
      }
      return // leave it since it has comments causing it to still be valid
    }
    case 'update': {
      return store.dispatch({ type: POST_UPDATED, postId: _id, post })
    }
  }
}
