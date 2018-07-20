import getStore from '../../store'
import { contactService } from '../../../feathers/services'
// action types
export const CONTACT_REMOVED = 'CONTACT_REMOVED'

// action methods
export const removeContact = _id => contactService.remove(_id)

export const removeContactRange = (from, to) => {
  const query = {
    createdAt: {
      $lte: to,
      $gte: from,
    },
  }
  return contactService.remove(null, { query })
}

export const contactRemoved = ({ _id }) => {
  getStore().dispatch({ type: CONTACT_REMOVED, msgId: _id })
}
