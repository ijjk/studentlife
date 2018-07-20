import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { flexRowCenter, sizes } from '../../style/theme'
import { newsPageId } from '../../util/config'
import Link from 'next/link'
import PageThumb from './PageThumb'

const style = {
  padding: 10,
  width: '100%',
  ...flexRowCenter,
  alignItems: 'flex-start',

  '& img': {
    width: 96,
    maxHeight: 96,
    margin: '0 10px 0 0',
  },

  '& p': {
    wordBreak: 'break-word',
    maxWidth: sizes.maxBlockWidth,
    '& span': {
      fontWeight: 700,
    },
  },

  '& a': {
    textDecoration: 'none',
  },
}

const PageInfo = ({ canEdit, pages }) => {
  const { curPage } = pages
  const { desc, name, thumb } = pages[curPage] || {}
  const isNews = curPage === newsPageId
  const editUrl = isNews ? '/news?edit' : '/page?id=' + curPage + '&edit'
  if (!thumb) return null
  return (
    <div className={css(style)}>
      <PageThumb {...{ _id: curPage, thumb }} />
      <div>
        <p>
          <span>{name}</span>
          {canEdit && (
            <Link href={editUrl} passHref>
              <a id="edit">{' - Edit'}</a>
            </Link>
          )}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default connect(({ pages }) => ({ pages }))(PageInfo)
