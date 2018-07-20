import app from '../../util/getApp'
import { oppCreated, oppRemoved, oppUpdated } from '../../redux/actions'

export const oppsService = app.service('opps')

if (typeof window !== 'undefined') {
  oppsService.on('created', opp => oppCreated(opp))
  oppsService.on('patched', opp => oppUpdated(opp))
  oppsService.on('removed', opp => oppRemoved(opp))
}
