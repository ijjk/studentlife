import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { clearDialog } from '../../redux/actions'
import { sizes, flexRowCenter } from '../../style/theme'

const style = {
  top: 0,
  left: 0,
  height: 0,
  zIndex: 6,
  opacity: 0,
  width: '100%',
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.75)',
  transition: 'opacity 175ms ease-in-out',

  '&.active': {
    opacity: 1,
    height: '100%',
  },

  '& .box': {
    top: '-15%',
    left: 0,
    right: 0,
    bottom: 0,
    width: '95%',
    height: '100%',
    margin: 'auto',
    maxHeight: 150,
    borderRadius: 3,
    ...flexRowCenter,
    flexWrap: 'wrap',
    padding: '0 15px',
    position: 'absolute',
    background: '#ffffff',
    maxWidth: sizes.maxBlockWidth + 50,
    boxShadow: '3px 6px 9px rgba(0, 0, 0, 0.8)',
  },

  '& h5, & p, & div': {
    width: '100%',
  },

  '& p': {
    margin: 'auto 0',
  },

  '& div': {
    ...flexRowCenter,

    '& button': {
      ':nth-child(1)': {
        marginLeft: 'auto',
      },
      ':nth-child(2)': {
        marginLeft: 10,
      },
    },
  },
}

const execBtnAct = func => {
  clearDialog()
  if (typeof func === 'function') {
    func()
  }
}

const Dialog = ({ dialog, router }) => {
  const {
    title,
    message,
    button1Txt,
    button2Txt,
    button1Act,
    button2Act,
    activePath,
  } = dialog

  const addEscape = button2Txt === 'Cancel'
  const hasButton2 = typeof button2Txt === 'string'
  const button1Click = () => execBtnAct(button1Act)
  const button2Click = () => execBtnAct(button2Act)
  const isActive = title && router.route === activePath
  if (title && !isActive) clearDialog()

  return (
    <div className={css(style) + (isActive ? ' active' : '')}>
      <div className="box">
        <h5>{title}</h5>
        <p>{message}</p>
        <div>
          <button
            onClick={button1Click}
            id={isActive && !hasButton2 ? 'escape' : null}
          >
            {button1Txt}
          </button>
          {hasButton2 && (
            <button
              autoFocus
              className="btn-alt"
              onClick={button2Click}
              id={addEscape ? 'escape' : null}
            >
              {button2Txt}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(connect(({ dialog }) => ({ dialog }))(Dialog))
