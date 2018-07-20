export const colors = {
  whiteBg: '#f5f6f7',
  blackFg: '#343434',

  blueLight: '#56ccf2',
  blueDark: '#2f80eD',
  blueMix: '#43a6f0',
  blueGradient: 'linear-gradient(to bottom, #56ccf2, #2f80ed)',

  grey: '#e5e5e5',
  darkGrey: '#979797',
  yellow: '#fde72a',
  dullWhite: '#e8f1f2',
}

export const shadows = {
  text: {
    textShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)',
  },
  box: {
    boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.3)',
  },
  insetBox: {
    boxShadow: 'inset 1px 3px 6px rgba(0, 0, 0, 0.3)',
  },
}

export const sizes = {
  navWidth: 248,
  maxBlockWidth: 450,
  mobileBreak: 808,
}

export const fonts = {
  nunito: `'Nunito', sans-serif`,
}

export const offScreen = {
  position: 'absolute',
  left: '-200%',
  top: '0',
}

export const flexRowCenter = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

export const flexColCenter = {
  ...flexRowCenter,
  flexDirection: 'column',
}

export const media = {
  greaterThan(size) {
    return `@media (min-width: ${size}px)`
  },
  lessThan(size) {
    return `@media (max-width: ${size - 1}px)`
  },
}

export const noTapHighlight = {
  outline: 'none',
  MsUserSelect: 'none',
  MozUserSelect: 'none',
  KhtmlUserSelect: 'none',
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.0)',
}
