import getStore from '../../store'
import { pagesService } from '../../../feathers/services'

// action types
export const PAGE_REMOVED = 'PAGE_REMOVED'

// action methods
export const removePage = _id => pagesService.remove(_id)

export const pageRemoved = _id => {
  getStore().dispatch({ type: PAGE_REMOVED, pageId: _id })
}
