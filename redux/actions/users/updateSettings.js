import getStore from '../../store'
import { restrictsService, usersService } from '../../../feathers/services'

// action methods
export const updateSettings = (ids = [], settings = {}) => {
  const { admin, posting, making_pages, updating_profile } = settings
  const { users } = getStore().getState()
  const updateRestricts = []
  const updateRoles = []
  const newRole = admin ? 'admin' : 'user'

  ids.forEach(_id => {
    const { restricts, role } = users[_id]
    if (role !== newRole) updateRoles.push(_id)
    if (
      !restricts.posting !== posting ||
      !restricts.making_pages !== making_pages ||
      !restricts.updating_profile !== updating_profile
    )
      updateRestricts.push(_id)
  })

  if (!updateRestricts.length && !updateRoles.length) {
    return Promise.resolve()
  }
  // leave only restricts in settings
  delete settings.admin
  Object.keys(settings).forEach(r => (settings[r] = !settings[r]))

  return addRestricts(updateRestricts, settings, users).then(() =>
    addRoles(updateRoles, admin ? 'admin' : 'user')
  )
}

const addRoles = (ids = [], role) => {
  if (!ids.length) return Promise.resolve()
  const id = ids.pop()
  return usersService.patch(id, { role }).then(() => addRoles(ids, role))
}

const addRestricts = (ids = [], restricts = {}, users = {}) => {
  const remove = Boolean(
    !restricts.posting && !restricts.making_pages && !restricts.updating_profile
  )
  if (remove) {
    const query = {
      _id: {
        $in: ids,
      },
    }
    return restrictsService.remove(null, { query })
  }

  if (!ids.length) return Promise.resolve()
  const id = ids.pop()
  restricts._id = id
  const next = () => addRestricts(ids, restricts, users)
  const hasRestricts = Boolean(Object.keys(users[id].restricts).length)
  const method = hasRestricts ? 'patch' : 'create'
  const params = hasRestricts ? [id, restricts] : [restricts]

  return restrictsService[method](...params).then(() => next())
} // addRestricts
