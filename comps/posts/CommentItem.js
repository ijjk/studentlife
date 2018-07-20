import React from 'react'
import { css } from 'glamor'
import PostMeta from './PostMeta'
import { colors } from '../../style/theme'
import PostText from './PostText'

const style = {
  paddingTop: 5,
  width: '98%',
  margin: '0 0 0 2%',
  position: 'relative',
  background: '#ffffff',
  borderTop: `1px solid ${colors.blackFg}`,
}

const CommentItem = ({
  _id,
  text,
  users,
  editing,
  archived,
  reported,
  commentId,
  createdAt,
  createdBy,
}) => (
  <div className={css(style)}>
    <PostMeta
      {...{ _id, commentId, users, createdAt, createdBy, reported, archived }}
    />
    <PostText {...{ _id, commentId, editing, text }} />
  </div>
)

export default CommentItem
