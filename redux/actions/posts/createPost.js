import axios from 'axios'
import getStore from '../../store'
import getError from '../../../util/getError'
import { postsService } from '../../../feathers/services'
import { homePageId, serverUrl } from '../../../util/config'
import { loadUsers } from '../users/loadUsers'

// action types
export const POST_PENDING = 'POST_PENDING'
export const POST_FAIL = 'POST_FAIL'
export const POST_PROGRESS = 'POST_PROGRESS'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_CREATED = 'POST_CREATED'

// action methods
export const postCreated = (post = {}) => {
  const store = getStore()
  const { pages, posts } = store.getState()
  const { archived, reported } = posts
  const { curPage } = pages
  if (archived !== post.archived || reported !== post.reported) return
  if (post.page !== curPage && curPage !== homePageId) return
  loadUsers([post.createdBy]).then(() => {
    store.dispatch({ type: POST_CREATED, post })
  })
}

export const createPost = ({ text, file }) => {
  const store = getStore()
  const { post, pages } = store.getState()
  const { curPage } = pages
  if (post.pending || (!text && !file)) return

  store.dispatch({ type: POST_PENDING })

  const getPoster = () => {
    if (!file) {
      return postsService.create({ text, page: curPage })
    } else {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('page', curPage)
      if (text) fd.append('text', text)

      const axiosInst = axios.create({
        baseURL: serverUrl,
        headers: {
          Authorization: localStorage['jwt'],
        },
      })
      const config = {
        onUploadProgress: e => {
          const progress = Math.round((e.loaded / e.total) * 100)
          store.dispatch({ type: POST_PROGRESS, progress })
        },
      }
      return axiosInst.post('posts', fd, config)
    }
  } // getPoster()

  return getPoster()
    .then(() => {
      store.dispatch({ type: POST_SUCCESS })
    })
    .catch(err => {
      store.dispatch({
        type: POST_FAIL,
        error: getError(err, 'An error occurred while posting'),
      })
    })
}
