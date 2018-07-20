import getStore from '../../store'

// action types
export const POST_EXPANDED = 'POST_EXPANDED'
export const POST_COLLAPSED = 'POST_COLLAPSED'

// action method
export const expandPost = postId => {
  getStore().dispatch({ type: POST_EXPANDED, postId })
}

export const collapsePost = () => {
  const store = getStore()
  const { expanded } = store.getState().posts
  if (!expanded) return
  store.dispatch({ type: POST_COLLAPSED })
}
