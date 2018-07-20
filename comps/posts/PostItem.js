import React from 'react'
import { sizes } from '../../style/theme'
import { homePageId, newsPageId } from '../../util/config'
import { growIn } from '../../style/keyframes'
import { numInitialComments, collapseComments } from '../../redux/actions'
import Link from 'next/link'
import PostFile from './PostFile'
import PostText from './PostText'
import CommentsArea from './CommentsArea'
import PostMeta from './PostMeta'

export const postStyle = {
  opacity: 0,
  width: '100%',
  textAlign: 'left',
  transform: 'scale(0)',
  margin: '0px auto 35px',
  maxWidth: sizes.maxBlockWidth,
  animation: `${growIn} 225ms ease forwards`,

  ':nth-child(1)': {
    marginTop: 0,
  },

  '& .page': {
    minHeight: 16,
    fontWeight: 700,
    padding: '5px 0',

    '& a': {
      textDecoration: 'underline',
    },
  }, // .page

  '& .box': {
    minHeight: 75,
    borderRadius: 4,
    background: '#ffffff',
    boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
  }, // .box

  '& .totalComments': {
    width: '100%',
    padding: '0px 5px 5px',

    '& span': {
      fontWeight: 700,
      cursor: 'pointer',
    },
  },
}

const PostItem = ({
  _id,
  text,
  file,
  page,
  users,
  pages,
  style,
  editing,
  reported,
  archived,
  createdAt,
  createdBy,
  className,
  commentIds,
  totalComments,
  ...commentStuff
}) => (
  <div {...{ className, style }}>
    <p className="page">
      {pages.curPage !== page ? (
        <Link href={page === newsPageId ? '/news' : '/page?id=' + page}>
          <a>Posted to {pages[page].name}</a>
        </Link>
      ) : (
        pages.curPage === homePageId && 'Posted to Home'
      )}
    </p>
    <div className="box">
      <PostMeta {...{ users, _id, createdBy, createdAt, reported, archived }} />
      {file && <PostFile {...{ file, _id }} />}
      <PostText {...{ _id, editing, text }} />
      <div className="totalComments">
        <p>
          {totalComments} comment{totalComments !== 1 ? 's' : ''}
          {commentIds &&
            commentIds.length > numInitialComments && [
              ' - ',
              <span key="collapse" onClick={() => collapseComments(_id)}>
                Collapse comments
              </span>,
            ]}
        </p>
      </div>
    </div>
    <CommentsArea
      {...{
        _id,
        users,
        canReply: !archived,
        totalComments,
        commentIds,
        ...commentStuff,
      }}
    />
  </div>
)

export default PostItem
