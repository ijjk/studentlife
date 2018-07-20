import app from '../../util/getApp'
import { userUpdated } from '../../redux/actions'

export const restrictsService = app.service('restricts')

if (typeof window !== 'undefined') {
  restrictsService.on('created', ({ _id, ...restricts }) =>
    userUpdated({ _id, restricts })
  )
  restrictsService.on('patched', ({ _id, ...restricts }) =>
    userUpdated({ _id, restricts })
  )
  restrictsService.on('removed', ({ _id }) =>
    userUpdated({ _id, restricts: {} })
  )
}
