import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listPages, setPage, loadPosts } from '../redux/actions'
import Layout from '../comps/Layout'
import PostBox from '../comps/posts/PostBox'
import PageInfo from '../comps/pages/PageInfo'
import EditPage from '../comps/pages/EditPage'
import PostsArea from '../comps/posts/PostsArea'
import ListPages from '../comps/pages/ListPages'
import withLoginReload from '../util/withLoginReload'

class Page extends Component {
  static async getInitialProps({ query }) {
    const props = {}
    const { id } = query
    if (id) {
      props.page = id
      props.editMode = typeof query.edit !== 'undefined'
      await setPage(id)
      if (!props.editMode) {
        await loadPosts({ initial: true })
      }
    } else {
      await listPages({ initial: true })
    }
    return props
  }

  render() {
    const { editMode, page, pages, users } = this.props
    const pageFound = Boolean(pages[page])
    const { isAdmin } = users[users.curUser] || {}
    const { createdBy } = pages[page] || {}
    const canEdit = isAdmin || createdBy === users.curUser
    const sharedProps = { canEdit }
    return (
      <Layout restrict>
        {pageFound && editMode && <EditPage {...sharedProps} curPage={page} />}
        {pageFound &&
          !editMode && (
            <div>
              <PageInfo {...sharedProps} />
              <PostBox {...{ page }} />
              <PostsArea {...sharedProps} page={page} />
            </div>
          )}
        {!pageFound &&
          page && <p className="errMsg">Page could not be found</p>}
        {!page && <ListPages />}
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ pages, users }) => ({ pages, users }))(Page),
  ctx => ({ query: ctx.query })
)
