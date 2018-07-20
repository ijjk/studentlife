import app from '../../util/getApp'
import { modCreated, modRemoved } from '../../redux/actions'

export const modsService = app.service('mods')

if (typeof window !== 'undefined') {
  modsService.on('created', mod => modCreated(mod))
  modsService.on('removed', mod => modRemoved(mod))
}
