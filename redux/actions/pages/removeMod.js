import getStore from '../../store'
import { modsService } from '../../../feathers/services'

// action types
export const PAGE_MOD_REMOVED = 'PAGE_MOD_REMOVED'

// action methods
export const removeMod = _id => modsService.remove(_id)

export const modRemoved = ({ _id, page }) => {
  getStore().dispatch({
    type: PAGE_MOD_REMOVED,
    pageId: page,
    modId: _id,
  })
}
