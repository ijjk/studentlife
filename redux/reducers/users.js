import {
  LOAD_USERS,
  LOGIN_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
  DO_SETUP,
  USER_UPDATED,
  USER_REMOVED,
  AVATAR_FAIL,
  AVATAR_SUCCESS,
  AVATAR_PROGRESS,
} from '../actions'

const initialState = {
  error: null,
  curUser: null,
  pending: false,
  doSetup: false,
  avatarError: null,
  avatarProgress: 0,
}

function users(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS: {
      return {
        ...state,
        ...action.users,
      }
    }

    case LOGIN_PENDING: {
      return {
        ...state,
        error: false,
        curUser: null,
        pending: true,
      }
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        curUser: null,
        pending: false,
        error: action.error,
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        error: null,
        pending: false,
        doSetup: false,
        curUser: action.userId,
      }
    }

    case LOGOUT: {
      return initialState
    }

    case DO_SETUP: {
      return {
        ...initialState,
        doSetup: true,
      }
    }

    case USER_UPDATED: {
      const { userId, user } = action
      if (!state[userId]) return state
      return {
        ...state,
        [userId]: {
          ...state[userId],
          ...user,
        },
      }
    }

    case USER_REMOVED: {
      return {
        ...state,
        [action.userId]: null,
      }
    }

    case AVATAR_PROGRESS: {
      return {
        ...state,
        avatarProgress: action.progress,
      }
    }

    case AVATAR_FAIL: {
      return {
        ...state,
        avatarError: action.error,
      }
    }

    case AVATAR_SUCCESS: {
      return {
        ...state,
        avatarProgress: 0,
        avatarError: null,
      }
    }

    default: {
      return state
    }
  }
}

export default users
