import app from '../../util/getApp'
import {
  oppCatCreated,
  oppCatRemoved,
  oppCatUpdated,
} from '../../redux/actions'

export const oppsCatsService = app.service('opps-cats')

if (typeof window !== 'undefined') {
  oppsCatsService.on('created', cat => oppCatCreated(cat))
  oppsCatsService.on('patched', cat => oppCatUpdated(cat))
  oppsCatsService.on('removed', cat => oppCatRemoved(cat))
}
