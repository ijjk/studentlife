import React from 'react'
import Icon from '@fortawesome/react-fontawesome'
import { uploadsUrl } from '../../util/config'

const Avatar = ({ avatar, src, style, ...props }) =>
  typeof avatar !== 'string' && !src ? (
    <Icon icon="user-circle" style={style} {...props} />
  ) : (
    <img
      src={src || uploadsUrl + avatar}
      style={{ borderRadius: '100%', ...style }}
      {...props}
    />
  )
export default Avatar
