import getStore from '../../store'
import { resourcesService } from '../../../feathers/services'

// action types
export const RESOURCE_REMOVED = 'RESOURCE_REMOVED'

// action methods
export const removeResource = _id => resourcesService.remove(_id)

export const resourceRemoved = ({ _id }) => {
  getStore().dispatch({ type: RESOURCE_REMOVED, resourceId: _id })
}
