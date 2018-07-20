import getStore from '../../store'
import { loadUsers } from '../../actions'
import { commentsService } from '../../../feathers/services'
import getError from '../../../util/getError'

export const numInitialComments = 3

// action types
export const COMMENTS_PENDING = 'COMMENTS_PENDING'
export const COMMENTS_FAIL = 'COMMENTS_FAIL'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'

// action methods
export const loadComments = ({
  $sort = -1, // new to old
  initial = false,
  $limit = 12,
  postId = '',
}) => {
  const store = getStore()
  const { posts } = store.getState()
  const { archived, reported } = posts
  $sort = { createdAt: $sort }

  const query = {
    $sort,
    archived,
    post: postId,
    $limit: initial ? numInitialComments : $limit,
    $skip: initial ? 0 : posts[postId].commentIds.length,
  }
  if (archived || reported) delete query.archived
  if (reported) query.reported = true

  if (!initial) {
    store.dispatch({
      type: COMMENTS_PENDING,
      postId,
    })
  }
  const commentIds = []
  const curComments = {}
  const usersToLoad = {}
  let total

  return commentsService
    .find({ query })
    .then(res => {
      total = res.total
      res.data.forEach(comment => {
        const { _id } = comment
        delete comment._id
        delete comment.post
        curComments[_id] = comment
        usersToLoad[comment.createdBy] = true
        commentIds.push(_id)
      })
      commentIds.reverse()
    })
    .then(() => loadUsers(Object.keys(usersToLoad)))
    .then(() => {
      store.dispatch({
        type: COMMENTS_SUCCESS,
        total,
        postId,
        commentIds,
        comments: curComments,
      })
    })
    .catch(err => {
      store.dispatch({
        type: COMMENTS_FAIL,
        postId,
        error: getError(err, 'An error occurred fetching comments'),
      })
    })
}

export const populateComments = ({ postIds = [], query = {} }) => {
  const loadOne = () => {
    if (!postIds.length) return Promise.resolve()
    const postId = postIds.pop()

    return loadComments({ initial: true, postId, ...query }).then(() =>
      loadOne()
    )
  }
  return loadOne()
}
