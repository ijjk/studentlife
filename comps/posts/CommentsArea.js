import React, { Component } from 'react'
import { css } from 'glamor'
import Icon from '@fortawesome/react-fontawesome'
import Spinner from '../Spinner'
import { loadComments } from '../../redux/actions'
import { flexRowCenter } from '../../style/theme'
import CommentItem from './CommentItem'
import CommentBox from './CommentBox'

const style = {
  '& .loadOlders': {
    marginBottom: 5,
    padding: '2px 0',
    fontWeight: 700,
    ...flexRowCenter,
    cursor: 'pointer',
    textAlign: 'right',
    userSelect: 'none',
  },

  '& .error': {
    padding: '10px 0',
    textAlign: 'center',
  },
}

class CommentsArea extends Component {
  componentDidUpdate(prevProps) {
    const {
      _id,
      commentIds,
      commentsError,
      commentsPending,
      moreComments,
    } = this.props
    if (!prevProps.commentIds.length) return
    if (
      !commentIds.length &&
      !commentsPending &&
      !commentsError &&
      moreComments
    ) {
      loadComments({ initial: true, postId: _id })
    }
  }

  loadMoreComments = () => loadComments({ postId: this.props._id })

  render() {
    const {
      _id,
      users,
      canReply,
      comments,
      commentIds,
      moreComments,
      commentsError,
      commentsPending,
    } = this.props

    return (
      <div className={css(style)} style={{ marginTop: moreComments ? 0 : 10 }}>
        {moreComments ? (
          <div
            className="loadOlders"
            onClick={commentsPending ? null : this.loadMoreComments}
          >
            <p style={{ marginLeft: 'auto' }}>Load older comments</p>
            {commentsPending ? (
              <Spinner size={16} style={{ margin: '0 5px' }} />
            ) : (
              <Icon
                icon="chevron-up"
                style={{
                  height: 16,
                  margin: '0 0 -2px 5px',
                }}
              />
            )}
          </div>
        ) : null}

        {commentIds.map((commentId, i) => (
          <CommentItem
            {...{
              _id,
              users,
              commentId,
              ...comments[commentId],
              style: i === 0 ? { borderColor: 'transparent' } : null,
            }}
            key={commentId}
          />
        ))}
        {commentsError ? <p className="error">{commentsError}</p> : null}

        {canReply && <CommentBox {...{ _id }} />}
      </div>
    )
  }
}

export default CommentsArea
