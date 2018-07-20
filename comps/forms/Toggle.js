import React from 'react'
import { css } from 'glamor'
import {
  colors,
  flexRowCenter,
  shadows,
  noTapHighlight,
} from '../../style/theme'

const toggleStyle = css({
  height: 40,
  width: '90%',
  maxWidth: 250,
  margin: 'auto',
  borderRadius: 25,
  ...shadows.insetBox,
  position: 'relative',
  background: colors.blueMix,

  '& .slider': {
    position: 'absolute',
    top: 5,
    zIndex: 0,
    height: 30,
    width: '50%',
    ...shadows.box,
    borderRadius: 15,
    background: colors.dullWhite,
    transition: 'left 275ms ease-in-out',

    '&.left': {
      left: 5,
    },

    '&.right': {
      left: 'calc(50% - 5px)',
    },
  }, // .slider

  '& div': {
    ...flexRowCenter,
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    ...shadows.text,
    ...noTapHighlight,
    color: '#ffffff',
    width: '50%',
    height: '100%',
    zIndex: 1,
    fontSize: 18,

    '& span': {
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'padding 225ms ease, color 125ms 100ms ease-out',
    },

    ':nth-child(2).active span': {
      paddingLeft: 5,
    },

    ':nth-child(3).active span': {
      paddingRight: 5,
    },

    '&.active span': {
      color: colors.blackFg,
    },
  },
})

const Toggle = ({ activeOption, maxWidth, options, onToggle }) => (
  <div className={toggleStyle} style={{ maxWidth }}>
    <div className={'slider ' + (!activeOption ? 'left' : 'right')} />

    {options.map((option, i) => (
      <div
        key={option}
        onClick={onToggle}
        className={i === activeOption ? 'active' : null}
      >
        <span>{option}</span>
      </div>
    ))}
  </div>
)

export default Toggle
