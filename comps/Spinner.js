import React from 'react'
import { css } from 'glamor'
import { colors } from '../style/theme'
import { spin } from '../style/keyframes'

const spinnerStyle = {
  width: 30,
  height: 30,
  margin: '0 auto',
  border: `3px solid ${colors.blueLight}`,
  borderLeft: 'none',
  borderBottom: 'none',
  borderRadius: '100%',
}

const Spinner = ({
  alt,
  borderWidth,
  className,
  size,
  speed,
  style,
  ...props
}) => (
  <div
    {...props}
    className={css(spinnerStyle) + (className ? ` ${className}` : '')}
    style={{
      ...style,
      width: size,
      borderWidth,
      height: size,
      borderColor: alt ? '#ffffff' : null,
      animation: `${spin} ${speed || 500}ms linear infinite`,
    }}
  />
)

export default Spinner
