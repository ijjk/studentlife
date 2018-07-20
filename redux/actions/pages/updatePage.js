import getStore from '../../store'
import { pagesService } from '../../../feathers/services'
import { serverUrl } from '../../../util/config'
import axios from 'axios'
import getError from '../../../util/getError'

// action types
export const PAGE_PENDING = 'PAGE_PENDING'
export const PAGE_FAIL = 'PAGE_FAIL'
export const PAGE_PROGRESS = 'PAGE_PROGRESS'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_UPDATED = 'PAGE_UPDATED'

// action methods
export const uploadPageThumb = ({ thumb, page }) => {
  const store = getStore()
  const fd = new FormData()
  fd.append('file', thumb)
  fd.append('page', page)

  const axiosInst = axios.create({
    baseURL: serverUrl,
    headers: {
      Authorization: localStorage['jwt'],
    },
  })
  const config = {
    onUploadProgress: e => {
      const progress = Math.round((e.loaded / e.total) * 100)
      store.dispatch({ type: PAGE_PROGRESS, progress })
    },
  }
  return axiosInst.post('page-thumbs', fd, config).then(() => {
    store.dispatch({ type: PAGE_SUCCESS })
  })
}

// also handles creating pages
export const updatePage = ({ _id, name, desc, thumb }) => {
  const store = getStore()
  store.dispatch({ type: PAGE_PENDING })

  const changes = {}
  if (name) changes.name = name
  if (desc) changes.desc = desc

  return new Promise((resolve, reject) => {
    if (name || desc) {
      ;(_id ? pagesService.patch(_id, changes) : pagesService.create(changes))
        .then(res => {
          if (!_id) _id = res._id
          resolve()
        })
        .catch(err => {
          store.dispatch({
            type: PAGE_FAIL,
            error: getError(err, 'An error occurred updating the page'),
          })
          reject() // don't upload thumbnail if this fails
        })
    } else {
      resolve()
    }
  })
    .then(() => thumb && uploadPageThumb({ thumb, page: _id }))
    .then(() => !thumb && store.dispatch({ type: PAGE_SUCCESS }))
    .then(() => _id)
    .catch(() => {})
}

export const pageUpdated = ({ _id, ...page }) => {
  getStore().dispatch({ type: PAGE_UPDATED, pageId: _id, page })
}
