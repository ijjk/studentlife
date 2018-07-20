import getStore from '../../store'
import { oppsService } from '../../../feathers/services'

// action types
export const OPP_CREATED = 'OPP_CREATED'

// action methods
export const createOpp = ({ cat, desc, link }) =>
  oppsService.create({ cat, desc, link })

export const oppCreated = ({ _id, cat, ...opp }) => {
  getStore().dispatch({ type: OPP_CREATED, cat, oppId: _id, opp })
}
