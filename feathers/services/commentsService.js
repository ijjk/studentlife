import app from '../../util/getApp'
import {
  commentCreated,
  commentRemoved,
  commentUpdated,
} from '../../redux/actions'

export const commentsService = app.service('comments')

if (typeof window !== 'undefined') {
  commentsService.on('created', comment => commentCreated(comment))
  commentsService.on('patched', comment => commentUpdated(comment))
  commentsService.on('removed', comment => commentRemoved(comment))
}
