import getStore from '../../store'
import { oppsService } from '../../../feathers/services'

// action types
export const OPP_UPDATED = 'OPP_UPDATED'

// action methods
export const updateOpp = ({ _id, ...opp }) => oppsService.patch(_id, opp)

export const oppUpdated = ({ _id, cat, ...opp }) => {
  getStore().dispatch({ type: OPP_UPDATED, cat, oppId: _id, opp })
}
