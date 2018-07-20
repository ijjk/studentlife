import app from '../../util/getApp'
import { pageUpdated, pageRemoved } from '../../redux/actions'

export const pagesService = app.service('pages')

if (typeof window !== 'undefined') {
  pagesService.on('patched', page => pageUpdated(page))
  pagesService.on('removed', page => pageRemoved(page._id))
}
