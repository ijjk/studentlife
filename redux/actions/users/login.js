import getStore from '../../store'
import app from '../../../util/getApp'
import { loadUsers } from '../../actions'
import getError from '../../../util/getError'
import Router from 'next/router'

// action types
export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const DO_SETUP = 'DO_SETUP'

// action methods
const cookieName = 'jwt'

const setCookie = expires => {
  const date = new Date(expires * 1000)
  expires = '; expires=' + date.toUTCString()
  document.cookie =
    cookieName + '=' + localStorage['jwt'] + expires + '; path=/'
}

const eraseCookie = () => {
  document.cookie = cookieName + '=; Max-Age=-99999999; path=/'
}

export const explainFail = error => {
  loginIdx++
  getStore().dispatch({ type: LOGIN_FAIL, error })
}

let loginIdx = 0
export const login = ({ doSetup, email, password, silent, userId }) => {
  const store = getStore()

  if (userId) {
    return loadUsers(userId, true).then(() => {
      store.dispatch({ type: LOGIN_SUCCESS, userId })
    })
  }

  if (doSetup) {
    store.dispatch({ type: DO_SETUP })
    return Promise.resolve()
  }

  const params =
    typeof email !== 'undefined'
      ? { email: email.toLowerCase(), password, strategy: 'local' }
      : undefined

  if (params && localStorage['jwt']) {
    logout(true)
  }
  if (!silent) {
    store.dispatch({ type: LOGIN_PENDING })
  }
  loginIdx++
  const curIdx = loginIdx

  return app
    .authenticate(params)
    .then(res => app.passport.verifyJWT(res.accessToken))
    .then(({ userId, exp }) => {
      return loadUsers(userId, true)
        .then(() => setCookie(exp))
        .then(() => getStore().dispatch({ type: LOGIN_SUCCESS, userId }))
    })
    .catch(err => {
      if (loginIdx !== curIdx) return
      getStore().dispatch({
        type: LOGIN_FAIL,
        error: silent ? null : getError(err),
      })
    })
} // login

export const logout = noRedirect => {
  eraseCookie()
  if (!noRedirect || typeof noRedirect !== 'boolean') {
    Router.push('/')
  }
  return app
    .logout()
    .catch(() => {})
    .then(() => {
      delete localStorage['jwt']
      getStore().dispatch({ type: LOGOUT })
    })
} // logout
