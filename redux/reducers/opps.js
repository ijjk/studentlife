import {
  OPPS_FAIL,
  OPPS_PENDING,
  OPPS_SUCCESS,
  OPP_CREATED,
  OPP_REMOVED,
  OPP_UPDATED,
  OPP_CAT_CREATED,
  OPP_CAT_REMOVED,
  OPP_CAT_UPDATED,
} from '../actions'

const initialState = {
  ids: [],
  error: null,
  pending: false,
}

function opps(state = initialState, action) {
  switch (action.type) {
    case OPPS_PENDING: {
      return {
        ...initialState,
        pending: true,
      }
    }

    case OPPS_FAIL: {
      return {
        ...initialState,
        error: action.error,
      }
    }

    case OPPS_SUCCESS: {
      return {
        ...initialState,
        ids: action.ids,
        ...action.opps,
      }
    }

    case OPP_CREATED: {
      const { cat, oppId, opp } = action
      if (state[cat] && state[cat][oppId]) return state
      return {
        ...state,
        [cat]: {
          ...state[cat],
          ids: [...state[cat].ids, oppId],
          [oppId]: {
            ...opp,
          },
        },
      }
    }

    case OPP_UPDATED: {
      const { cat, oppId, opp } = action
      return {
        ...state,
        [cat]: {
          ...state[cat],
          [oppId]: {
            ...state[cat][oppId],
            ...opp,
          },
        },
      }
    }

    case OPP_REMOVED: {
      const { cat, oppId } = action
      if (!state[cat]) return state
      return {
        ...state,
        [cat]: {
          ...state[cat],
          [oppId]: null,
          ids: state[cat].ids.filter(id => id !== oppId),
        },
      }
    }

    case OPP_CAT_CREATED: {
      const { catId, cat } = action
      if (state[catId]) return state
      return {
        ...state,
        ids: [...state.ids, catId],
        [catId]: {
          ...cat,
          ids: [],
        },
      }
    }

    case OPP_CAT_UPDATED: {
      const { catId, cat } = action
      if (!state[catId]) return state
      return {
        ...state,
        [catId]: {
          ...state[catId],
          ...cat,
        },
      }
    }

    case OPP_CAT_REMOVED: {
      const { catId } = action
      if (!state[catId]) return state
      return {
        ...state,
        [catId]: null,
        ids: state.ids.filter(id => id !== catId),
      }
    }

    default: {
      return state
    }
  }
}

export default opps
