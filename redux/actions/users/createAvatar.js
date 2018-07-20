import getStore from '../../store'
import { serverUrl } from '../../../util/config'
import axios from 'axios'
import getError from '../../../util/getError'

// action types
export const AVATAR_FAIL = 'AVATAR_FAIL'
export const AVATAR_PROGRESS = 'AVATAR_PROGRESS'
export const AVATAR_SUCCESS = 'AVATAR_SUCCESS'

// action methods
export const createAvatar = file => {
  const store = getStore()
  const fd = new FormData()
  fd.append('file', file)

  const axiosInst = axios.create({
    baseURL: serverUrl,
    headers: {
      Authorization: localStorage['jwt'],
    },
  })
  const config = {
    onUploadProgress: e => {
      const progress = Math.round((e.loaded / e.total) * 100)
      store.dispatch({ type: AVATAR_PROGRESS, progress })
    },
  }
  return axiosInst
    .post('/avatars', fd, config)
    .then(() => {
      store.dispatch({ type: AVATAR_SUCCESS })
    })
    .catch(err => {
      store.dispatch({
        type: AVATAR_FAIL,
        error: getError(err, 'An error occurred uploading avatar'),
      })
    })
}
