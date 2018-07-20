import getStore from '../../store'
import { resourcesService } from '../../../feathers/services'

// action types
export const RESOURCE_UPDATED = 'RESOURCE_UPDATED'

// action methods
export const updateResource = ({ _id, ...resource }) =>
  resourcesService.patch(_id, resource)

export const resourceUpdated = ({ _id, ...resource }) => {
  getStore().dispatch({ type: RESOURCE_UPDATED, resourceId: _id, resource })
}
