import getStore from '../../store'
import { oppsCatsService } from '../../../feathers/services'

// action types
export const OPP_CAT_REMOVED = 'OPP_CAT_REMOVED'

// action methods
export const removeOppCat = _id => oppsCatsService.remove(_id)

export const oppCatRemoved = ({ _id }) => {
  getStore().dispatch({ type: OPP_CAT_REMOVED, catId: _id })
}
