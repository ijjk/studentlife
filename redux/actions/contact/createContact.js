import getStore from '../../store'
import axios from 'axios'
import { serverUrl } from '../../../util/config'

// action types
export const CONTACT_CREATED = 'CONTACT_CREATED'

// action methods
export const createContact = ({ name, email, msg }) => {
  const axiosInst = axios.create({
    baseURL: serverUrl,
    headers: {
      Authorization: localStorage['jwt'],
    },
  })
  return axiosInst.post('/contact', { name, email, msg })
}

export const contactCreated = ({ _id, ...msg }) => {
  getStore().dispatch({ type: CONTACT_CREATED, msgId: _id, msg })
}
