import getStore from '../../store'
import { resourcesService } from '../../../feathers/services'
import { maxResults } from '../../../util/config'
import getError from '../../../util/getError'

// action types
export const RESOURCES_PENDING = 'RESOURCES_PENDING'
export const RESOURCES_FAIL = 'RESOURCE_FAIL'
export const RESOURCES_SUCCESS = 'RESOURCES_SUCCESS'

// action methods
export const loadResources = () => {
  const store = getStore()
  const { users } = store.getState()
  if (!users.curUser) return Promise.resolve()
  const query = {
    $limit: maxResults,
    $sort: { label: 1 },
  }
  const resources = {}
  const ids = []
  store.dispatch({ type: RESOURCES_PENDING })

  return resourcesService
    .find({ query })
    .then(res => {
      res.data.forEach(({ _id, ...item }) => {
        ids.push(_id)
        resources[_id] = item
      })
      store.dispatch({ type: RESOURCES_SUCCESS, ids, resources })
    })
    .catch(err => {
      store.dispatch({
        type: RESOURCES_FAIL,
        error: getError(err, 'An error occurred loading resources'),
      })
    })
}
