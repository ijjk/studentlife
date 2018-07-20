import getStore from '../../store'
import { oppsCatsService } from '../../../feathers/services'

// action types
export const OPP_CAT_CREATED = 'OPP_CAT_CREATED'

// action methods
export const createOppCat = ({ name }) => oppsCatsService.create({ name })

export const oppCatCreated = ({ _id, ...cat }) => {
  getStore().dispatch({ type: OPP_CAT_CREATED, catId: _id, cat })
}
