import {
  LIST_USERS_FAIL,
  LIST_USERS_SUCCESS,
  LIST_USERS_PENDING,
  LIST_USERS_MORE_PENDING,
  USER_REMOVED,
} from '../actions'

const initialState = {
  ids: [],
  error: null,
  filter: null,
  hasMore: false,
  pending: false,
}

function mngUsers(state = initialState, action) {
  switch (action.type) {
    case LIST_USERS_PENDING: {
      return {
        ...initialState,
        pending: true,
        filter: action.filter,
      }
    }

    case LIST_USERS_MORE_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      }
    }

    case LIST_USERS_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    case LIST_USERS_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        hasMore: action.hasMore,
        ids: [...state.ids, ...action.ids],
      }
    }

    case USER_REMOVED: {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.userId),
      }
    }

    default: {
      return state
    }
  }
}

export default mngUsers
