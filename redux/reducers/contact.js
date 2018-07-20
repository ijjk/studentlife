import {
  CONTACT_FAIL,
  CONTACT_PENDING,
  CONTACT_SUCCESS,
  CONTACT_MORE_PENDING,
  CONTACT_CREATED,
  CONTACT_REMOVED,
  contactLimit,
} from '../actions'

const initialState = {
  ids: [],
  error: null,
  hasMore: false,
  pending: false,
}

function contact(state = initialState, action) {
  switch (action.type) {
    case CONTACT_PENDING: {
      return {
        ...initialState,
        pending: true,
      }
    }

    case CONTACT_MORE_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      }
    }

    case CONTACT_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    case CONTACT_SUCCESS: {
      return {
        ...state,
        pending: false,
        ...action.msgs,
        hasMore: action.hasMore,
        ids: [...state.ids, ...action.ids],
      }
    }

    case CONTACT_CREATED: {
      const { msgId, msg } = action
      let { hasMore, ids } = state
      if (state[msgId]) return state
      const numIds = ids.length + 1

      if ((hasMore && numIds > contactLimit) || numIds === contactLimit) {
        hasMore = true
        delete state[ids.pop()]
      }
      return {
        ...state,
        hasMore,
        [msgId]: msg,
        ids: [msgId, ...ids],
      }
    }

    case CONTACT_REMOVED: {
      const { msgId } = action
      if (!state[msgId]) return state
      return {
        ...state,
        [msgId]: null,
        ids: state.ids.filter(id => id !== msgId),
      }
    }

    default: {
      return state
    }
  }
}

export default contact
