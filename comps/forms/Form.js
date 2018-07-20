import React from 'react'
import { css } from 'glamor'
import Icon from '@fortawesome/react-fontawesome'
import {
  colors,
  flexColCenter,
  flexRowCenter,
  shadows,
  button,
} from '../../style/theme'
import { slideLeft, slideRight } from '../../style/keyframes'
import Spinner from '../Spinner'

const slideLen = '-200%'
const slideSpeed = 300 // in milliseconds

const fieldStyle = {
  fontSize: 18,
  color: '#ffffff',
  ...shadows.text,
}

const formStyle = {
  maxWidth: 250,
  width: '95%',
  margin: '0 auto',
  padding: '10px 0',
  overflowX: 'hidden',
  ...flexColCenter,

  '&.hideLeft .field': {
    marginLeft: slideLen,
  },

  '&.hideRight .field': {
    marginRight: slideLen,
  },

  '&.showRight .field': {
    animation: `${slideRight(slideLen)} ${slideSpeed}ms ease-in-out`,
  },

  '&.showLeft .field': {
    animation: `${slideLeft(slideLen)} ${slideSpeed}ms ease-in-out`,
  },

  '& .errorMsg': {
    textAlign: 'center',
    paddingTop: 5,
  },

  '& .field': {
    width: '96%',
    height: 40,
    margin: '15px 0 0',
    transition: `margin ${slideSpeed}ms ease-in-out`,

    '&.icon': {
      position: 'relative',

      '& svg:nth-child(3)': {
        position: 'absolute',
        left: 6,
        bottom: 14,
        color: '#ffffff',
        opacity: 0.95,
        pointerEvents: 'none',
      },

      '& input': {
        left: 0,
        paddingLeft: 36,
        position: 'absolute',
      },

      '& .underline': {
        position: 'absolute',
        top: 32,
        left: 2,
      },
    }, // &.icon

    '&.extraIcon': {
      '& input': {
        paddingRight: 28,
      },

      '& svg:nth-child(4)': {
        position: 'absolute',
        cursor: 'pointer',
        padding: 5,
        right: 2,
        top: 0,
      },
    }, // &.extraIcon

    '& input, & textarea': {
      ...fieldStyle,
      outline: 0,
      padding: 4,
      width: '100%',
      border: 'none',
      background: 'transparent',

      '::placeholder': {
        ...fieldStyle,
        opacity: 1,
      },

      ':focus ~ .underline': {
        background: '#ffffff',
        opacity: 1,
      },
    },

    '&.textarea': {
      height: 75,
      marginTop: 5,

      '& textarea': {
        width: 'calc(100% - 8px)',
        height: 65,
      },
    },

    '& .underline': {
      width: '99%',
      height: 1,
      background: colors.dullWhite,
      opacity: 0.5,
      boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.25)',
      transition: 'opacity 150ms ease-in-out',
    },
  }, // .field

  '& button': {
    width: '96%',
    fontSize: 20,
    marginTop: 20,
    ...shadows.text,
    padding: '4px 0',
    ...flexRowCenter,
    borderRadius: 15,
    color: colors.blackFg,
    justifyContent: 'center',
    background: colors.dullWhite,
  },
}

const Form = ({
  maxWidth,
  style,
  className,
  children,
  error,
  pending,
  head,
  submit,
  ...props
}) => (
  <form
    method="post"
    noValidate
    {...{
      ...props,
      className: `${css(formStyle)} ${className || ''}`,
      style: { ...style, maxWidth },
    }}
  >
    {head}
    <div className="errorMsg">{error}</div>
    {children}
    <button onClick={submit} className={pending ? '' : 'on'}>
      {pending ? (
        <Spinner size={24} />
      ) : (
        [
          <span key="text">Submit</span>,
          <Icon
            style={{
              height: 18,
              margin: '-3px 0 0 4px',
            }}
            key="icon"
            icon="chevron-right"
            preserveAspectRatio="none"
          />,
        ]
      )}
    </button>
  </form>
)

export default Form
