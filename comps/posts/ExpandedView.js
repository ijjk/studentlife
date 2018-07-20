import React from 'react'
import { css } from 'glamor'
import { uploadsUrl } from '../../util/config'
import { collapsePost } from '../../redux/actions'

const style = {
  top: 0,
  left: 0,
  zIndex: 5,
  opacity: 0,
  height: '0',
  width: '100%',
  color: '#ffffff',
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.75)',
  transition: 'opacity 175ms ease-in-out',

  '&.active': {
    opacity: 1,
    height: '100%',
  },

  '& .close': {
    top: 15,
    right: 25,
    fontSize: 35,
    cursor: 'pointer',
    position: 'absolute',
  },

  '& img': {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    maxWidth: '90%',
    maxHeight: '90%',
    position: 'absolute',
  },
}

const ExpandedView = ({ posts }) => (
  <div className={css(style) + (posts.expanded ? ' active' : '')}>
    <div
      id="escape"
      className="close"
      onClick={collapsePost}
      title="Hide expanded view"
    >
      X
    </div>

    {posts.expanded ? (
      <img
        src={uploadsUrl + posts[posts.expanded].file}
        alt="expanded post image"
      />
    ) : null}
  </div>
)

export default ExpandedView
