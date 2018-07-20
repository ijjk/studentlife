import React from 'react'
import { css } from 'glamor'
import { flexRowCenter, shadows, colors, media } from '../style/theme'
import Router from 'next/router'
import { growIn } from '../style/keyframes'

const bubbleWidth = 140

const style = {
  padding: 10,
  width: '100%',
  maxWidth: 675,
  margin: 'auto',
  ...flexRowCenter,
  flexWrap: 'wrap',
  justifyContent: 'center',

  '& a': {
    zIndex: 1,
    margin: 10,
    width: 135,
    height: 135,
    padding: '0 4px',
    ...shadows.box,
    ...flexRowCenter,
    textAlign: 'center',
    borderRadius: '100%',
    background: '#ffffff',
    display: 'inline-flex',
    textDecoration: 'none',
    justifyContent: 'center',
    border: `2px solid transparent`,
    transition: `
      border-color 145ms ease-in-out, 
      left 325ms ease-in-out, 
      top 325ms ease-in-out
    `,

    '&.active': {
      zIndex: 2,
      position: 'relative',
      transition: 'margin',
      transitionDelay: '160ms',

      '& p': {
        zIndex: 2,
        color: '#ffffff',
        ...shadows.text,
      },

      '&:before': {
        content: '""',
        position: 'absolute',
        top: -3,
        left: -3,
        right: 0,
        zIndex: 1,
        bottom: 0,
        width: 140, // bubble width + border
        height: 140,
        margin: 'auto',
        borderRadius: '100%',
        background: colors.blueGradient,
        animation: `${growIn} 160ms ease-in-out`,
      },
    },

    ':hover': {
      borderColor: colors.blueMix,
    },

    [media.lessThan(330)]: {
      width: 110,
      height: 110,

      '&.active:before': {
        height: 115,
        width: 115,
      },
    },
  },
}

const delayNav = e => {
  e.preventDefault()
  const el = e.currentTarget
  el.classList.add('active')

  const targetLeft = el.offsetLeft
  const targetTop = el.offsetTop
  const wrap = document.getElementById('bubbles')
  const wrapHeight = wrap.offsetHeight
  const wrapWidth = wrap.offsetWidth
  wrap.style.height = wrapHeight + 'px'
  wrap.style.width = wrapWidth + 'px'

  const els = document.getElementsByClassName('bubble')
  const offsets = []

  // get positions
  for (let i = 0; i < els.length; i++) {
    const top = els[i].offsetTop - 10.5
    const left = els[i].offsetLeft - 10.5
    offsets.push({ left, top })
  }
  // freeze positions
  for (let i = 0; i < els.length; i++) {
    els[i].style.position = 'absolute'
    els[i].style.top = offsets[i].top + 'px'
    els[i].style.left = offsets[i].left + 'px'
  }
  // transition position to target
  setTimeout(() => {
    for (let i = 0; i < els.length; i++) {
      els[i].style.top = targetTop + 'px'
      els[i].style.left = targetLeft + 'px'
    }
    setTimeout(() => Router.push(el.href), 500)
  }, 50)
}

const BubbleNav = ({ items = [], rowCount = 0 }) => (
  <div
    id="bubbles"
    className={css(style)}
    style={{ maxWidth: rowCount ? bubbleWidth * (rowCount + 1) : null }}
  >
    {items.map(({ label, link }, idx) => (
      <a id={idx} key={link} href={link} onClick={delayNav} className="bubble">
        <p>{label}</p>
      </a>
    ))}
  </div>
)

export default BubbleNav
