import React, { Component } from 'react'
import { initializeStore } from '../redux/store'

const isServer = typeof window === 'undefined'

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    global.reduxStore = initializeStore(initialState)
    return global.reduxStore
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window.reduxStore) {
    window.reduxStore = initializeStore(initialState)
  }
  return window.reduxStore
}

export default App => {
  return class AppWithRedux extends Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      }
    }

    constructor(props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}
