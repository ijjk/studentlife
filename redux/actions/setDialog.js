import getStore from '../store'
import Router from 'next/router'

// action types
export const SET_DIALOG = 'SET_DIALOG'
export const CLEAR_DIALOG = 'CLEAR_DIALOG'

// action methods
export const setDialog = ({
  title = 'Confirm...',
  message = 'Are you sure?',
  button1Txt = 'Confirm',
  button2Txt = 'Cancel',
  button1Act = () => {},
  button2Act = () => {},
}) => {
  getStore().dispatch({
    type: SET_DIALOG,
    payload: {
      title,
      message,
      button1Txt,
      button2Txt,
      button1Act,
      button2Act,
      activePath: Router.route,
    },
  })
}

export const clearDialog = () => {
  getStore().dispatch({ type: CLEAR_DIALOG })
}
