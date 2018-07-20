import React, { Component } from 'react'
import Layout from '../comps/Layout'
import PostBox from '../comps/posts/PostBox'
import PostsArea from '../comps/posts/PostsArea'
import { homePageId } from '../util/config'
import { setPage, loadPosts } from '../redux/actions'
import withLoginReload from '../util/withLoginReload'

class Home extends Component {
  static async getInitialProps() {
    await setPage(homePageId)
    await loadPosts({ initial: true })
  }

  render() {
    return (
      <Layout restrict>
        <PostBox />
        <PostsArea page={homePageId} />
      </Layout>
    )
  }
}

export default withLoginReload(Home)
