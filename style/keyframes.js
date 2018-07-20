import { keyframes } from 'glamor'

export const growIn = keyframes('growIn', {
  from: {
    opacity: 0,
    transform: 'scale(0)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const chewMoveAnim = animSize =>
  keyframes('chewMoveAnim', {
    from: {
      left: -1.5 * animSize,
    },
    to: {
      left: '100%',
    },
  })

export const chewTopAnim = keyframes('chewTopAnim', {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(-40deg)',
  },
  '100%': {
    transform: 'rotate(0deg)',
  },
})

export const chewBotAnim = keyframes('chewBotAnim', {
  '0%': {
    transform: 'rotate(180deg)',
  },
  '50%': {
    transform: 'rotate(220deg)',
  },
  '100%': {
    transform: 'rotate(180deg)',
  },
})

export const slideRight = slideLength =>
  keyframes('slideRight', {
    from: {
      marginRight: slideLength,
    },
    to: {
      marginRight: 0,
    },
  })

export const slideLeft = slideLength =>
  keyframes('slideLeft', {
    from: {
      marginLeft: slideLength,
    },
    to: {
      marginLeft: 0,
    },
  })

export const fadeIn = keyframes('fadeIn', {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

export const fadeOut = keyframes('fadeOut', {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const spin = keyframes('spin', {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export const progClipRotate = keyframes('progClipRotate', {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '50%': {
    transform: 'rotate(0deg)',
  },
  '50.01%': {
    transform: 'rotate(180deg)',
  },
  '100%': {
    transform: 'rotate(180deg)',
  },
})

export const progRotateRight = keyframes('progRotateRight', {
  '0%': {
    transform: 'rotate(-45deg)',
  },
  '100%': {
    transform: 'rotate(135deg)',
  },
})

export const progShowLeft = keyframes('progShowLeft', {
  '0%': {
    opacity: 0,
  },
  '49.99%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 1,
  },
})
