import getStore from '../../store'
import getBatch from '../../../util/getBatch'
import { loadUsers } from '../../actions'
import {
  modsService,
  pagesService,
  pageThumbsService,
} from '../../../feathers/services'

// action types
export const LOAD_PAGES = 'LOAD_PAGES'

// action methods
export const loadPages = (pageIds = []) => {
  const store = getStore()

  if (!Array.isArray(pageIds)) {
    if (pageIds) pageIds = [pageIds]
    else return Promise.reject()
  }
  const { pages } = store.getState()

  const fetchBatch = () => {
    const batch = getBatch(pageIds, pages)
    if (!batch.length) return Promise.resolve()

    const $or = batch.map(_id => ({ _id }))
    const query = { $or, $limit: $or.limit }
    const modsQuery = {
      ...query,
      $or: $or.map(({ _id }) => ({ page: _id })),
    }
    const modsToLoad = {}
    const curPages = {}

    return pagesService
      .find({ query })
      .then(res => {
        res.data.forEach(page => {
          const { _id } = page
          delete page._id
          curPages[_id] = page
        })
      })
      .then(() => modsService.find({ query: modsQuery }))
      .then(res => {
        res.data.forEach(({ page, ...mod }) => {
          if (!curPages[page].mods) {
            curPages[page].mods = []
          }
          modsToLoad[mod.user] = true
          curPages[page].mods.push(mod)
        })
      })
      .then(() => loadUsers(Object.keys(modsToLoad)))
      .then(() => pageThumbsService.find({ query }))
      .then(res => {
        res.data.forEach(thumb => {
          curPages[thumb._id].thumb = thumb.file
        })
      })
      .then(() => {
        store.dispatch({ type: LOAD_PAGES, pages: curPages })
      })
      .then(() => fetchBatch())
  }
  return fetchBatch()
}
