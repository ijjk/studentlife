import { css, rehydrate } from 'glamor'

// rehydrate must be called before any glamor calls
// or else styles will duplicate
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
}

// these have to be imported after rehydrate or else it will duplicate
const { colors, fonts, noTapHighlight, shadows } = require('./theme')
require('glamor/reset')
require('./fonts/nunito')

css.insert(`
  *::selection {
    background: orange;
  }
`)

const navTarget = '#navExpanded:checked ~'
const expandTarget = `${navTarget} header div .expandBtn div`

css.global(`${expandTarget}:nth-child(1)`, {
  transformOrigin: 8.5,
  transform: 'rotate(45deg)',
})

css.global(`${expandTarget}:nth-child(2)`, {
  opacity: 0,
})

css.global(`${expandTarget}:nth-child(3)`, {
  transformOrigin: 8.5,
  transform: 'rotate(-45deg)',
})

css.global(`${navTarget} div .Nav`, {
  overflow: 'auto',
  height: 'calc(100vh - 55px)',
})

css.global('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

css.global('body', {
  fontSize: 16,
  color: colors.blackFg,
  fontFamily: fonts.nunito,
  background: colors.whiteBg,
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
})

css.global('button, input, optgroup, select, textarea', {
  fontFamily: fonts.nunito,
})

css.global('a', {
  color: 'inherit',
})

css.global('textarea', {
  resize: 'none',
})

css.global('button, .btn', {
  outline: 0,
  fontSize: 14,
  border: 'none',
  ...shadows.box,
  borderRadius: 3,
  color: '#ffffff',
  cursor: 'pointer',
  ...noTapHighlight,
  userSelect: 'none',
  padding: '5px 10px',
  textTransform: 'uppercase',
  background: colors.blueMix,
  transition: 'box-shadow 150ms ease-in-out',
})

css.global('.btn-alt', {
  color: colors.blackFg,
  background: '#ffffff',
})

css.global('button:focus, .btn:focus', {
  outline: `1px dotted ${colors.blackFg}`,
})

css.global('button:hover, .btn:hover', {
  boxShadow: '3px 6px 9px rgba(0, 0, 0, 0.3)',
})

css.global('button:active, .btn:active', {
  boxShadow: 'inset 1px 3px 6px rgba(0, 0, 0, 0.3)',
})

// setup h1-6 tags
const headerSizes = [40, 32, 28, 24, 20, 16]
headerSizes.forEach((fontSize, i) => {
  css.global(`h${i + 1}`, { fontSize })
})

css.global('.offscreen', {
  position: 'absolute',
  left: '-200%',
  top: 0,
})

css.global('.errMsg', {
  textAlign: 'center',
  padding: '25px 10px',
})
