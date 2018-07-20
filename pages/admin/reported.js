import React, { Component } from 'react'
import { homePageId } from '../../util/config'
import { loadPosts, setPage } from '../../redux/actions'
import Layout from '../../comps/Layout'
import PostsArea from '../../comps/posts/PostsArea'
import AdminRestrict from '../../comps/AdminRestrict'
import withLoginReload from '../../util/withLoginReload'

class Reported extends Component {
  static async getInitialProps() {
    await setPage(homePageId)
    await loadPosts({ initial: true, reported: true })
  }

  render() {
    return (
      <Layout restrict>
        <AdminRestrict>
          <h5 style={{ padding: 10 }}>Reported items</h5>
          <PostsArea page={homePageId} />
        </AdminRestrict>
      </Layout>
    )
  }
}

export default withLoginReload(Reported)
