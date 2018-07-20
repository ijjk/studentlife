import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { loadPosts } from '../../redux/actions'
import Spinner from '../Spinner'
import ExpandedView from './ExpandedView'
import PostItem, { postStyle } from './PostItem'

const style = {
  width: '100%',
  textAlign: 'center',
  padding: 10,
  paddingBottom: 25,

  '& .moreBtn': {
    margin: '10px auto',
  },
}

class PostsArea extends Component {
  constructor() {
    super()
    this.state = {
      numAdded: 0,
      numPrev: 0,
    }
    this.className = css(style)
    this.postClass = css(postStyle)
  }

  componentDidUpdate(prevProps) {
    const { posts } = this.props
    if (!prevProps.posts.ids.length) return
    if (!posts.ids.length && !posts.pending && !posts.error && posts.hasMore) {
      this.loadMorePosts()
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { numPrev } = state
    const numCur = props.posts.ids.length

    if (numCur !== numPrev) {
      return {
        numPrev: numCur,
        numAdded: numCur > numPrev ? numCur - numPrev : 0,
      }
    }
    return null
  }

  loadMorePosts = () => loadPosts({})

  render() {
    const { page, pages, posts, users } = this.props
    const { numAdded } = this.state
    const idxOffset = posts.ids.length - numAdded
    // prevent rendering posts during page change
    // because this can cause posts to mount on previous page
    // and then be remounted when the page actually changes
    if (page !== pages.curPage) return null

    return (
      <div className={this.className}>
        <ExpandedView {...{ posts }} />
        {posts.ids.map((_id, idx) => {
          if (numAdded) {
            idx = idx > idxOffset ? idx - idxOffset : 0
          }
          return (
            <PostItem
              {...{
                ...posts[_id],
                _id,
                pages,
                users,
                className: this.postClass,
                style: { animationDelay: idx * 50 + 'ms' },
              }}
              key={_id}
            />
          )
        })}
        {!posts.ids.length &&
          !posts.pending &&
          !posts.error && <p>There are no posts here yet</p>}
        {posts.error && <p style={{ marginTop: 20 }}>{posts.error}</p>}
        {posts.pending && (
          <Spinner
            style={{ marginTop: 20 }}
            size={posts.ids.length ? 24 : 36}
          />
        )}
        {posts.hasMore &&
          !posts.pending && (
            <button className="moreBtn" onClick={this.loadMorePosts}>
              Load more
            </button>
          )}
      </div>
    )
  }
}

export default connect(({ pages, posts, users }) => ({ pages, posts, users }))(
  PostsArea
)
