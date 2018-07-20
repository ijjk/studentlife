import { SEARCH_FAIL, SEARCH_PENDING, SEARCH_SUCCESS } from '../actions'

const initialState = {
  error: null,
  results: [],
  searchQ: '',
  pending: false,
}

function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
      }
    }

    case SEARCH_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    case SEARCH_SUCCESS: {
      const { searchQ, results } = action
      return {
        ...initialState,
        searchQ,
        results,
      }
    }

    default: {
      return state
    }
  }
}

export default search
