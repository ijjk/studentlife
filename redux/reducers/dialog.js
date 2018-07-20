import { SET_DIALOG, CLEAR_DIALOG } from '../actions'

const initialState = {
  title: null,
  message: null,
  button1Txt: null,
  button2Txt: null,
  button1Act: null,
  button2Act: null,
}

function dialog(state = initialState, action) {
  switch (action.type) {
    case SET_DIALOG: {
      return {
        ...initialState,
        ...action.payload,
      }
    }

    case CLEAR_DIALOG: {
      return initialState
    }

    default: {
      return state
    }
  }
}

export default dialog
