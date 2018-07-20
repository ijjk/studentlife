import {
  POSTS_FAIL,
  POSTS_PENDING,
  POSTS_SUCCESS,
  POSTS_MORE_PENDING,
  POST_UPDATED,
  POST_REMOVED,
  POST_CREATED,
  POST_EXPANDED,
  POST_COLLAPSED,
  COMMENTS_PENDING,
  COMMENTS_FAIL,
  COMMENTS_SUCCESS,
  COMMENT_CREATED,
  COMMENT_REMOVED,
  COMMENTS_COLLAPSED,
  numInitialComments,
  postsLimit,
} from '../actions'
import { UPDATE_COMMENT } from '../actions/posts/updateComment'

const initialState = {
  ids: [],
  $sort: null,
  error: null,
  hasMore: false,
  pending: false,
  expanded: null,
  archived: false,
  reported: false,
}

function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS_PENDING: {
      return {
        ...initialState,
        pending: true,
        $sort: action.$sort,
        archived: action.archived,
        reported: action.reported,
      }
    }

    case POSTS_MORE_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      }
    }

    case POSTS_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    case POSTS_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        ...action.posts,
        hasMore: action.hasMore,
        ids: [...state.ids, ...action.ids],
      }
    }

    case POST_UPDATED: {
      const id = action.postId
      const post = state[id]
      if (!post) return state
      return {
        ...state,
        [id]: {
          ...post,
          ...action.post,
        },
      }
    }

    case POST_CREATED: {
      const { _id, ...post } = action.post
      let { hasMore, ids, $sort } = state
      const numIds = ids.length

      if (state[_id]) {
        return {
          ...state,
          [_id]: {
            ...state[_id],
            ...post,
          },
        }
      }
      if ($sort === 1) {
        // sorted old to new
        if (state.hasMore) return state
        ids = [...state.ids, _id]
      } else {
        if ((hasMore && numIds > postsLimit) || numIds === postsLimit) {
          const toRemove = ids.pop()
          delete state[toRemove]
          hasMore = true
        }
        ids = [_id, ...state.ids]
      }

      return {
        ...state,
        ids,
        hasMore,
        [_id]: {
          ...post,
          comments: {},
          commentIds: [],
          totalComments: 0,
          commentsError: null,
          commentsPending: false,
        },
      }
    }

    case POST_REMOVED: {
      const ids = state.ids.filter(id => id !== action.postId)
      delete state[action.postId]
      return {
        ...state,
        ids,
        total: state.total - 1,
      }
    }

    case COMMENTS_PENDING: {
      const id = action.postId
      return {
        ...state,
        [id]: {
          ...state[id],
          commentsError: null,
          commentsPending: true,
        },
      }
    }

    case COMMENTS_FAIL: {
      const id = action.postId
      return {
        ...state,
        [id]: {
          ...state[id],
          commentsPending: false,
          commentsError: action.error,
        },
      }
    }

    case COMMENTS_SUCCESS: {
      const id = action.postId
      const post = state[id] || {}
      const comments = post.comments || {}
      const commentIds = post.commentIds || []

      return {
        ...state,
        [id]: {
          ...post,
          commentsError: null,
          commentsPending: false,
          totalComments: action.total,
          moreComments:
            action.total > commentIds.length + action.commentIds.length,
          comments: { ...comments, ...action.comments },
          commentIds: [...action.commentIds, ...commentIds],
        },
      }
    }

    case COMMENTS_COLLAPSED: {
      const id = action.postId
      const post = state[id]
      let { commentIds, comments } = post
      if (commentIds.length <= numInitialComments) return state
      const moreComments = commentIds.length > numInitialComments
      const toRemove = commentIds.length - numInitialComments

      commentIds.splice(0, toRemove).forEach(oldId => delete comments[oldId])
      return {
        ...state,
        [id]: {
          ...post,
          comments,
          commentIds,
          moreComments,
        },
      }
    }

    case COMMENT_CREATED: {
      const id = action.postId
      const post = state[id]
      if (!post) return state
      let { comments, commentIds, moreComments, totalComments } = post
      const numIds = commentIds.length
      const comment = action.comment
      const newId = comment._id
      if (comments[newId]) return state
      delete comment._id
      delete comment.post
      comments[newId] = comment

      if (
        (moreComments && numIds > numInitialComments) ||
        numIds === numInitialComments
      ) {
        const toRemove = commentIds[0]
        delete comments[toRemove]
        commentIds.splice(0, 1)
        moreComments = true
      }
      commentIds.push(newId)

      return {
        ...state,
        [id]: {
          ...post,
          comments,
          commentIds,
          moreComments,
          totalComments: totalComments + 1,
        },
      }
    }

    case UPDATE_COMMENT: {
      const { postId, commentId } = action
      const post = state[postId]
      if (!post || !post.comments[commentId]) {
        return state
      }
      return {
        ...state,
        [postId]: {
          ...post,
          comments: {
            ...post.comments,
            [commentId]: {
              ...post.comments[commentId],
              ...action.comment,
            },
          },
        },
      }
    }

    case COMMENT_REMOVED: {
      const { postId, commentId } = action
      const post = state[postId]
      if (!post || !post.comments[commentId]) return state
      const commentIds = post.commentIds.filter(id => id !== commentId)
      delete post.comments[commentId]
      return {
        ...state,
        [postId]: {
          ...post,
          commentIds,
          totalComments: post.totalComments - 1,
        },
      }
    }

    case POST_EXPANDED: {
      return {
        ...state,
        expanded: action.postId,
      }
    }

    case POST_COLLAPSED: {
      return {
        ...state,
        expanded: null,
      }
    }

    default: {
      return state
    }
  }
}

export default posts
