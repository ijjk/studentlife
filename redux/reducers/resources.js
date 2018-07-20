import {
  RESOURCES_FAIL,
  RESOURCES_PENDING,
  RESOURCES_SUCCESS,
  RESOURCE_CREATED,
  RESOURCE_UPDATED,
  RESOURCE_REMOVED,
} from '../actions'

const initialState = {
  ids: [],
  error: null,
  pending: false,
}

function resources(state = initialState, action) {
  switch (action.type) {
    case RESOURCES_PENDING: {
      return {
        ...initialState,
        pending: true,
      }
    }

    case RESOURCES_FAIL: {
      return {
        ...initialState,
        error: action.error,
      }
    }

    case RESOURCES_SUCCESS: {
      return {
        ...initialState,
        ids: action.ids,
        ...action.resources,
      }
    }

    case RESOURCE_CREATED: {
      const id = action.resourceId
      return {
        ...state,
        ids: [...state.ids, id],
        [id]: {
          ...action.resource,
        },
      }
    }

    case RESOURCE_UPDATED: {
      const id = action.resourceId
      return {
        ...state,
        [id]: {
          ...state[id],
          ...action.resource,
        },
      }
    }

    case RESOURCE_REMOVED: {
      const id = action.resourceId
      if (!state[id]) return state
      return {
        ...state,
        [id]: null,
        ids: state.ids.filter(_id => _id !== id),
      }
    }

    default: {
      return state
    }
  }
}

export default resources
