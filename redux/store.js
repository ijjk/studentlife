import { applyMiddleware, combineReducers, createStore } from 'redux'

import contact from './reducers/contact'
import dialog from './reducers/dialog'
import mngUsers from './reducers/mngUsers'
import opps from './reducers/opps'
import page from './reducers/page'
import pages from './reducers/pages'
import post from './reducers/post'
import posts from './reducers/posts'
import users from './reducers/users'
import resources from './reducers/resources'
import search from './reducers/search'

const reducers = combineReducers({
  contact,
  dialog,
  mngUsers,
  opps,
  page,
  pages,
  post,
  posts,
  resources,
  search,
  users,
})

let middleware
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const logger = require('redux-logger').default
  middleware = applyMiddleware(logger)
}

export const initializeStore = (initialState = {}) =>
  createStore(reducers, initialState, middleware)

const getStore = () =>
  typeof window === 'undefined' ? global.reduxStore : window.reduxStore

export default getStore
