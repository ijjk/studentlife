import React from 'react'
import { css } from 'glamor'
import { shadows } from '../../style/theme'
import { defaultNewsThumb, newsPageId, uploadsUrl } from '../../util/config'

const thumbStyle = {
  width: 96,
  height: 96,
  ...shadows.box,
  borderRadius: 96,
  background: '#ffffff',
}

const PageThumb = ({ _id, thumb, className, src, style, ...props }) => {
  const isNewsIcon = _id === newsPageId && thumb === defaultNewsThumb
  return (
    <img
      {...props}
      alt="page thumb"
      className={css(thumbStyle) + (className ? ' ' + className : '')}
      src={src || uploadsUrl + thumb}
      style={{
        width: 96,
        ...(isNewsIcon
          ? {
              height: 'auto',
              maxHeight: 96,
              borderRadius: 0,
              boxShadow: 'none',
              background: 'none',
            }
          : {}),
        ...style,
      }}
    />
  )
}

export default PageThumb
