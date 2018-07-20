import React from 'react'
import { connect } from 'react-redux'
import Layout from '../comps/Layout'
import BubbleNav from '../comps/BubbleNav'
import Icon from '@fortawesome/react-fontawesome'

const getLabel = (label, icon) => [
  <Icon
    {...{ icon }}
    key="i"
    style={{ height: 30, width: 30, paddingBottom: 5 }}
  />,
  <span key="l" style={{ width: '100%', display: 'block' }}>
    {label}
  </span>,
]
const items = [
  { label: getLabel('Add users', 'user-plus'), link: '/admin/add-users' },
  { label: getLabel('Manage users', 'users'), link: '/admin/mng-users' },
  { label: getLabel('Contact messages', 'envelope'), link: '/admin/contact' },
  {
    label: getLabel('Reported posts', 'exclamation-circle'),
    link: '/admin/reported',
  },
  { label: getLabel('Archived posts', 'list'), link: '/admin/archived' },
]
const Admin = ({ users }) => {
  const user = users[users.curUser] || {}
  if (!user.isAdmin) {
    return (
      <Layout restrict>
        <p className="errMsg">
          You do not have valid permission to access this page
        </p>
      </Layout>
    )
  }
  return (
    <Layout restrict>
      <BubbleNav {...{ items, rowCount: 3 }} />
    </Layout>
  )
}

export default connect(({ users }) => ({ users }))(Admin)
