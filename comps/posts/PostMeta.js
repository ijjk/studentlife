import React from 'react'
import { css } from 'glamor'
import Link from 'next/link'
import Avatar from '../user/Avatar'
import PostOptions from './PostOptions'
import getDate from '../../util/getDate'

const style = {
  width: '100%',
  display: 'flex',
  paddingBottom: 5,
  position: 'relative',

  '& .text': {
    fontSize: 15,
    marginLeft: 5,
    position: 'relative',
    wordWrap: 'break-word',
    width: 'calc(100% - 55px)',

    '& .name': {
      fontWeight: 700,
      paddingBottom: 1,
      width: 'calc(100% - 30px)',
      '& a': {
        textDecoration: 'none',
      },
    },

    '& .PostOptions': {
      top: 0,
      right: 0,
      padding: '8px 2px',
      position: 'absolute',
    },
  },
}

const PostMeta = ({
  _id,
  commentId,
  users,
  createdBy,
  createdAt,
  reported,
  archived,
}) => {
  const { avatar, firstName, lastName, username } = users[createdBy] || {}
  return (
    <div className={css(style)}>
      <Avatar
        avatar={avatar}
        style={{ height: 50, width: 50, borderRadius: 50 }}
      />
      <div className="text">
        <p className="name">
          <Link href={'/user?id=' + createdBy}>
            <a>
              {firstName} {lastName} - @{username}
            </a>
          </Link>
        </p>
        <p>{getDate(createdAt)}</p>
        <PostOptions
          {...{ _id, commentId, reported, archived, createdBy, users }}
        />
      </div>
    </div>
  )
}

export default PostMeta
