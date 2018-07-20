import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { homePageId } from '../util/config'
import { loadPosts, loadUsers, setPage } from '../redux/actions'
import Layout from '../comps/Layout'
import PostsArea from '../comps/posts/PostsArea'
import withLoginReload from '../util/withLoginReload'
import Avatar from '../comps/user/Avatar'
import { flexRowCenter } from '../style/theme'

const style = {
  paddingTop: 5,
  ...flexRowCenter,
  flexWrap: 'wrap',
  alignItems: 'flex-start',

  '& p': {
    padding: 10,
    fontWeight: 700,
  },
}

class User extends Component {
  static async getInitialProps({ query }) {
    const { id } = query || {}
    if (id) {
      await setPage(homePageId)
      await loadUsers([query.id])
      await loadPosts({ initial: true, createdBy: query.id })
    }
    return { id }
  }

  render() {
    const { users, id } = this.props
    const selUser = users[id] || {}
    const { avatar, firstName, lastName, username } = selUser
    return (
      <Layout restrict>
        {username && (
          <div>
            <div className={css(style)}>
              <Avatar {...{ avatar }} style={{ height: 72, width: 72 }} />
              <p>{`${firstName} ${lastName} - @${username}`}</p>
            </div>
            <PostsArea page={homePageId} />
          </div>
        )}
        {!username && (
          <p style={{ textAlign: 'center', padding: '25px 10px' }}>
            The user could not be found
          </p>
        )}
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ users }) => ({ users }))(User),
  ctx => ({ query: ctx.query })
)
