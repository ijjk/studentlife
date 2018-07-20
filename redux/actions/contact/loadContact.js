import getStore from '../../store'
import { contactService } from '../../../feathers/services'
import getError from '../../../util/getError'

// action types
export const CONTACT_PENDING = 'CONTACT_PENDING'
export const CONTACT_FAIL = 'CONTACT_FAIL'
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS'
export const CONTACT_MORE_PENDING = 'CONTACT_MORE_PENDING'

// action methods
export const contactLimit = 24

export const loadContact = ({ initial = false, $sort = { createdAt: -1 } }) => {
  const store = getStore()
  const { contact, users } = store.getState()
  const { ids } = contact

  if (!users.curUser || !users[users.curUser].isAdmin) {
    return Promise.resolve()
  }
  const query = {
    $sort,
    $limit: contactLimit,
    $skip: initial ? 0 : ids.length,
  }
  store.dispatch({ type: initial ? CONTACT_PENDING : CONTACT_MORE_PENDING })

  return contactService
    .find({ query })
    .then(res => {
      const msgs = {}
      const newIds = res.data.map(({ _id, ...msg }) => {
        msgs[_id] = msg
        return _id
      })
      store.dispatch({
        type: CONTACT_SUCCESS,
        msgs,
        ids: newIds,
        hasMore: res.total > ids.length + newIds.length,
      })
    })
    .catch(err => {
      store.dispatch({
        type: CONTACT_FAIL,
        error: getError(err, 'An error occurred loading the messages'),
      })
    })
}
