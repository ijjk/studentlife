import app from '../../util/getApp'
import { contactCreated, contactRemoved } from '../../redux/actions'

export const contactService = app.service('contact')

if (typeof window !== 'undefined') {
  contactService.on('created', msg => contactCreated(msg))
  contactService.on('removed', msg => contactRemoved(msg))
}
