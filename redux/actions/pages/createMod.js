import getStore from '../../store'
import { modsService, usersService } from '../../../feathers/services'
import { loadUsers } from '../../actions'

// action types
export const PAGE_MOD_CREATED = 'PAGE_MOD_CREATED'

// action methods
export const createMod = username => {
  const { pages } = getStore().getState()
  const page = pages.curPage
  let user

  return usersService
    .find({
      query: {
        username: { $search: username },
      },
    })
    .then(res => {
      if (!res.total) {
        throw new Error('user not found')
      }
      user = res.data[0]._id
    })
    .then(() => modsService.create({ user, page }))
  // don't catch so caller can
}

export const modCreated = ({ page, ...mod }) => {
  loadUsers([mod.user]).then(() => {
    getStore().dispatch({
      type: PAGE_MOD_CREATED,
      pageId: page,
      mod,
    })
  })
}
