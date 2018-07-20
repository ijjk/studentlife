import {
  PAGE_FAIL,
  PAGE_PENDING,
  PAGE_PROGRESS,
  PAGE_SUCCESS,
} from '../actions'

const initialState = {
  error: null,
  progress: 0,
  pending: false,
}

function page(state = initialState, action) {
  switch (action.type) {
    case PAGE_PENDING: {
      return {
        ...initialState,
        pending: true,
      }
    }

    case PAGE_FAIL: {
      return {
        ...initialState,
        error: action.error,
      }
    }

    case PAGE_PROGRESS: {
      return {
        ...state,
        progress: action.progress,
      }
    }

    case PAGE_SUCCESS: {
      return initialState
    }

    default: {
      return state
    }
  }
}

export default page
