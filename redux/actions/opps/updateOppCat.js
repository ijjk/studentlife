import getStore from '../../store'
import { oppsCatsService } from '../../../feathers/services'

// action types
export const OPP_CAT_UPDATED = 'OPP_CAT_UPDATED'

// action methods
export const updateOppCat = ({ _id, ...cat }) => oppsCatsService.patch(_id, cat)

export const oppCatUpdated = ({ _id, ...cat }) => {
  getStore().dispatch({ type: OPP_CAT_UPDATED, catId: _id, cat })
}
