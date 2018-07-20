import app from '../../util/getApp'
import { pageUpdated } from '../../redux/actions'

export const pageThumbsService = app.service('page-thumbs')

if (typeof window !== 'undefined') {
  pageThumbsService.on('created', ({ _id, file }) =>
    pageUpdated({ _id, thumb: file })
  )
}
