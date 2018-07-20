import React, { Component } from 'react'
import { connect } from 'react-redux'

// if a page is navigated to before logging in the data
// will not be able to be fetched, so watch for login
// to occurr and refetch getInitialProps

const withLoginReload = (Comp, parseCtx, doUpdate) => {
  class WithLogin extends Component {
    static async getInitialProps(ctx) {
      let props = {}
      if (!ctx.didUpdate && typeof parseCtx === 'function') {
        props = parseCtx(ctx)
      }
      props.compProps = await Comp.getInitialProps(ctx)
      return props
    }

    componentDidUpdate(prevProps) {
      const { curUser } = this.props.users
      let update = false
      if (typeof doUpdate === 'function') {
        update = doUpdate(this.props, prevProps)
      }

      if ((prevProps.users.curUser !== curUser && curUser) || update) {
        let ctx = {}
        if (typeof parseCtx === 'function') {
          ctx = parseCtx({ ...this.props, didUpdate: true })
        }
        WithLogin.getInitialProps(ctx)
      }
    }

    render() {
      return <Comp {...this.props.compProps} />
    }
  }

  return connect(({ users }) => ({ users }))(WithLogin)
}

export default withLoginReload
