import {
  POST_FAIL,
  POST_PENDING,
  POST_PROGRESS,
  POST_SUCCESS,
} from '../actions'

const initialState = {
  error: null,
  progress: 0,
  pending: false,
}

function post(state = initialState, action) {
  switch (action.type) {
    case POST_PENDING: {
      return {
        ...initialState,
        pending: true,
      }
    }

    case POST_FAIL: {
      return {
        ...initialState,
        error: action.error,
      }
    }

    case POST_PROGRESS: {
      return {
        ...state,
        progress: action.progress,
      }
    }

    case POST_SUCCESS: {
      return initialState
    }

    default: {
      return state
    }
  }
}

export default post
