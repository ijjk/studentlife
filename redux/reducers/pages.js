import {
  SET_PAGE,
  LOAD_PAGES,
  PAGE_UPDATED,
  PAGE_REMOVED,
  PAGE_MOD_CREATED,
  PAGE_MOD_REMOVED,
  LIST_PAGES_FAIL,
  LIST_PAGES_PENDING,
  LIST_PAGES_SUCCESS,
} from '../actions'

const initialState = {
  toList: [],
  error: null,
  curPage: null,
  pending: false,
  hasMore: false,
  sort: 'createdAt:-1',
}

function page(state = initialState, action) {
  switch (action.type) {
    case LOAD_PAGES: {
      return {
        ...state,
        ...action.pages,
      }
    }

    case SET_PAGE: {
      return {
        ...state,
        curPage: action.pageId,
      }
    }

    case PAGE_UPDATED: {
      const id = action.pageId
      if (!state[id]) return state
      return {
        ...state,
        [id]: {
          ...state[id],
          ...action.page,
        },
      }
    }

    case PAGE_REMOVED: {
      const id = action.pageId
      if (!state[id]) return state
      return {
        ...state,
        [id]: null,
      }
    }

    case PAGE_MOD_CREATED: {
      const page = state[action.pageId]
      let { mods } = page
      if (!mods) mods = []
      const added = mods.some(({ user }) => user === action.mod.user)
      if (added) return state
      return {
        ...state,
        [action.pageId]: {
          ...page,
          mods: [...mods, action.mod],
        },
      }
    }

    case PAGE_MOD_REMOVED: {
      const page = state[action.pageId]
      let { mods } = page

      if (mods) {
        mods = mods.filter(({ _id }) => _id !== action.modId)
      }
      return {
        ...state,
        [action.pageId]: {
          ...page,
          mods,
        },
      }
    }

    case LIST_PAGES_PENDING: {
      return {
        ...state,
        error: null,
        pending: true,
        sort: action.sort,
        toList: action.initial ? [] : state.toList,
      }
    }

    case LIST_PAGES_FAIL: {
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    }

    case LIST_PAGES_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        hasMore: action.hasMore,
        toList: [...state.toList, ...action.toList],
      }
    }

    default: {
      return state
    }
  }
}

export default page
