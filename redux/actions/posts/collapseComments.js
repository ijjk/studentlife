import getStore from '../../store'

// action types
export const COMMENTS_COLLAPSED = 'COMMENTS_COLLAPSED'

// action methods
export const collapseComments = postId => {
  getStore().dispatch({ type: COMMENTS_COLLAPSED, postId })
}
