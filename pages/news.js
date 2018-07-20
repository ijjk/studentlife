import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newsPageId } from '../util/config'
import { setPage, loadPosts } from '../redux/actions'
import Layout from '../comps/Layout'
import PostBox from '../comps/posts/PostBox'
import PageInfo from '../comps/pages/PageInfo'
import EditPage from '../comps/pages/EditPage'
import PostsArea from '../comps/posts/PostsArea'
import withLoginReload from '../util/withLoginReload'

class News extends Component {
  static async getInitialProps({ query }) {
    await setPage(newsPageId)
    let editMode = true
    if (typeof query.edit === 'undefined') {
      editMode = false
      await loadPosts({ initial: true })
    }
    return { editMode }
  }

  render() {
    const { editMode, pages, users } = this.props
    const { mods } = pages[pages.curPage] || {}
    const { curUser } = users
    const { isAdmin } = users[curUser] || {}
    const canEdit = Boolean(
      isAdmin || (Array.isArray(mods) && mods.some(mod => mod.user === curUser))
    )
    const sharedProps = { canEdit }
    return (
      <Layout restrict>
        {editMode ? (
          <EditPage {...sharedProps} curPage={newsPageId} />
        ) : (
          <div>
            <PageInfo {...sharedProps} />
            {canEdit && <PostBox />}
            <PostsArea page={newsPageId} />
          </div>
        )}
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ pages, users }) => ({ pages, users }))(News),
  ctx => ({ query: ctx.query })
)
