import getStore from '../../store'
import { resourcesService } from '../../../feathers/services'

// action types
export const RESOURCE_CREATED = 'RESOURCE_CREATED'

// action methods
export const createResource = ({ label, link }) =>
  resourcesService.create({ label, link })

export const resourceCreated = ({ _id, ...resource }) => {
  getStore().dispatch({ type: RESOURCE_CREATED, resourceId: _id, resource })
}
