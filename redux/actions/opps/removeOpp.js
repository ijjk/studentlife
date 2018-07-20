import getStore from '../../store'
import { oppsService } from '../../../feathers/services'

// action types
export const OPP_REMOVED = 'OPP_REMOVED'

// action methods
export const removeOpp = _id => oppsService.remove(_id)

export const oppRemoved = ({ _id, cat }) => {
  getStore().dispatch({ type: OPP_REMOVED, cat, oppId: _id })
}
