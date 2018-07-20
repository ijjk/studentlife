import app from '../../util/getApp'
import { postCreated, postRemoved, postUpdated } from '../../redux/actions'

export const postsService = app.service('posts')

if (typeof window !== 'undefined') {
  postsService.on('created', post => postCreated(post))
  postsService.on('patched', post => postUpdated(post))
  postsService.on('removed', post => postRemoved(post))
}
