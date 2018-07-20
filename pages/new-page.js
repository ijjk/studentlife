import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../comps/Layout'
import EditPage from '../comps/pages/EditPage'

class NewPage extends Component {
  render() {
    const { users } = this.props
    const { restricts } = users[users.curUser] || {}
    return (
      <Layout restrict>
        <h4 style={{ padding: '10px 10px 0' }}>Create page</h4>
        {restricts && restricts.making_pages ? (
          <p style={{ padding: 10 }}>
            Making pages is disabled for your account.
          </p>
        ) : (
          <EditPage curPage="new" />
        )}
      </Layout>
    )
  }
}

export default connect(({ users }) => ({ users }))(NewPage)
