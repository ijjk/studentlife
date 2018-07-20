import React, { Component } from 'react'
import { homePageId } from '../../util/config'
import { setPage, loadPosts } from '../../redux/actions'
import Layout from '../../comps/Layout'
import PostsArea from '../../comps/posts/PostsArea'
import AdminRestrict from '../../comps/AdminRestrict'
import withLoginReload from '../../util/withLoginReload'

class Archived extends Component {
  static async getInitialProps() {
    await setPage(homePageId)
    await loadPosts({ initial: true, archived: true })
  }

  render() {
    return (
      <Layout restrict>
        <AdminRestrict>
          <h5 style={{ padding: 10 }}>Archived items</h5>
          <PostsArea page={homePageId} />
        </AdminRestrict>
      </Layout>
    )
  }
}

export default withLoginReload(Archived)
