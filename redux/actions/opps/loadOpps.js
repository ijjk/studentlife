import getStore from '../../store'
import { oppsService, oppsCatsService } from '../../../feathers/services'
import { maxResults } from '../../../util/config'
import getError from '../../../util/getError'

// action types
export const OPPS_PENDING = 'OPPS_PENDING'
export const OPPS_FAIL = 'OPPS_FAIL'
export const OPPS_SUCCESS = 'OPPS_SUCCESS'

// action methods
const sharedQuery = { $limit: maxResults, $sort: { createdAt: 1 } }
export const getCatsOpps = (catIds, opps) => {
  if (!catIds.length) return Promise.resolve()
  const cat = catIds.pop() + ''
  const query = { ...sharedQuery, cat }
  return oppsService
    .find({ query })
    .then(res => {
      res.data.forEach(({ _id, desc, link }) => {
        opps[cat].ids.push(_id)
        opps[cat][_id] = { desc, link }
      })
    })
    .then(() => getCatsOpps(catIds, opps))
}

export const loadOpps = () => {
  const store = getStore()
  const { users } = store.getState()
  if (!users.curUser) return Promise.resolve()
  store.dispatch({ type: OPPS_PENDING })

  const catIds = []
  const opps = {}

  return oppsCatsService
    .find({ query: sharedQuery })
    .then(res => {
      res.data.forEach(({ _id, name }) => {
        catIds.push(_id)
        opps[_id] = { name, ids: [] }
      })
    })
    .then(() => getCatsOpps([...catIds], opps))
    .then(() =>
      store.dispatch({
        type: OPPS_SUCCESS,
        ids: catIds,
        opps,
      })
    )
    .catch(err =>
      store.dispatch({
        type: OPPS_FAIL,
        error: getError(err, 'An error occurred loading opportunities'),
      })
    )
}
