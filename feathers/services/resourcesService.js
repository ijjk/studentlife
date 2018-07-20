import app from '../../util/getApp'
import {
  resourceCreated,
  resourceUpdated,
  resourceRemoved,
} from '../../redux/actions'

export const resourcesService = app.service('resources')

if (typeof window !== 'undefined') {
  resourcesService.on('created', resource => resourceCreated(resource))
  resourcesService.on('patched', resource => resourceUpdated(resource))
  resourcesService.on('removed', resource => resourceRemoved(resource))
}
