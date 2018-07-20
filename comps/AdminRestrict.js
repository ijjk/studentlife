import React, { Component } from 'react'
import { connect } from 'react-redux'

class AdminRestrict extends Component {
  render() {
    const { users, children } = this.props
    const { isAdmin } = users[users.curUser] || {}

    if (isAdmin) return children
    return (
      <p className="errMsg">
        You do not have valid permission to access this page
      </p>
    )
  }
}

export default connect(({ users }) => ({ users }))(AdminRestrict)
