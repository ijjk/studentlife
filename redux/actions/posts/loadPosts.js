import getStore from '../../store'
import getError from '../../../util/getError'
import { homePageId } from '../../../util/config'
import { postsService, commentsService } from '../../../feathers/services'
import { populateComments, loadPages, loadUsers } from '../../actions'

// action types
export const POSTS_FAIL = 'POSTS_FAIL'
export const POSTS_PENDING = 'POSTS_PENDING'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_MORE_PENDING = 'POSTS_MORE_PENDING'

// action methods
let curFetchId = 0
export const postsLimit = 10

export const loadPosts = async ({
  $sort = -1, // new to old
  $limit = postsLimit,
  createdBy = null,
  initial = false,
  reported = false,
  archived = false, // if true only get archived posts
}) => {
  const store = getStore()
  const { pages, posts, users } = store.getState()

  if (!users.curUser) return
  if (!initial) {
    archived = posts.archived
    reported = posts.reported
  }
  const page = pages.curPage
  let $skip = initial ? 0 : posts.ids.length
  const query = {
    page,
    $skip,
    $limit,
    archived,
    $sort: { createdAt: initial ? $sort : posts.$sort },
  }

  // load posts that have reported or archived comments
  const $select = ['post']
  let $or = {}

  if (archived) {
    const res = await commentsService
      .find({
        query: { archived, $select },
      })
      .catch(() => {})

    res.data.forEach(({ post }) => ($or[post] = true))
  }
  if (reported) {
    query.reported = true
    delete query.archived
    const res = await commentsService
      .find({
        query: { reported, $select },
      })
      .catch(() => {})

    res.data.forEach(({ post }) => ($or[post] = true))
  }
  $or = Object.keys($or)

  if ($or.length) {
    query.$or = $or.map(_id => ({ _id }))
    const extraOr = { archived }
    if (reported) extraOr.reported = true
    $or.push(extraOr)
    delete query.archived
    delete query.reported
  }

  if (createdBy) {
    query.createdBy = createdBy
  }
  if (page === homePageId) {
    delete query.page
  }
  const curIds = []
  const curPosts = {}
  const pagesToLoad = {}
  const usersToLoad = {}

  store.dispatch({
    type: initial ? POSTS_PENDING : POSTS_MORE_PENDING,
    $sort,
    ...(initial
      ? {
          archived,
          reported,
        }
      : {}),
  })
  let hasMore
  curFetchId++
  const fetchId = curFetchId

  return postsService
    .find({ query })
    .then(res => {
      // Ignore current posts if new ones have been requested
      if (fetchId !== curFetchId) return
      $skip += res.data.length
      hasMore = $skip < res.total

      res.data.forEach(post => {
        let { _id } = post
        _id += '' // _id is an ObjectId() instance during ssr
        delete post._id
        curIds.push(_id)
        post.comments = {}
        post.commentIds = []
        pagesToLoad[post.page] = true
        usersToLoad[post.createdBy] = true
        curPosts[_id] = post
      })

      return loadPages(Object.keys(pagesToLoad))
        .then(() => loadUsers(Object.keys(usersToLoad)))
        .then(() => {
          store.dispatch({
            hasMore,
            ids: curIds,
            posts: curPosts,
            type: POSTS_SUCCESS,
          })
        })
        .then(() =>
          populateComments({
            postIds: [...curIds],
            query: { reported, archived },
          })
        )
    })
    .catch(err => {
      store.dispatch({
        type: POSTS_FAIL,
        error: getError(err, 'An error occurred fetching posts'),
      })
    })
}
