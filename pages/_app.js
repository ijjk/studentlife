import React from 'react'
import App, { Container } from 'next/app'
import withRedux from '../util/withRedux'
import { Provider } from 'react-redux'
import { login } from '../redux/actions'
import '../util/icons'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (typeof window === 'undefined') {
      if (ctx.req.userId) {
        await login({ userId: ctx.req.userId })
      } else {
        const { doSetup } = app.get('publicConfig')
        if (doSetup) await login({ doSetup })
      }
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(MyApp)
