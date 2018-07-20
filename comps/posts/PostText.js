import React from 'react'
import { css } from 'glamor'
import {
  setDialog,
  updatePost,
  updateComment,
  commentUpdated,
  postUpdated,
} from '../../redux/actions'
import { flexRowCenter, colors } from '../../style/theme'
import { maxPostText } from '../../util/config'

const style = {
  width: '100%',
  textAlign: 'center',
  padding: '5px 0 15px',
  wordBreak: 'break-word',

  '& textarea': {
    padding: 5,
    width: '100%',
    border: 'none',
    marginBottom: 10,
    borderBottom: `1px solid ${colors.grey}`,
  },

  '& .buttons': {
    width: '100%',
    ...flexRowCenter,
    justifyContent: 'center',

    '& button': {
      margin: '0 5px',
    },
  },
}

const getEditId = ({ _id, commentId }) =>
  'edit' + (commentId ? 'Comment' + commentId : 'Post' + _id)

const turnOffEditing = ({ _id, commentId }) => {
  if (commentId) {
    return commentUpdated({ post: _id, _id: commentId, editing: false })
  }
  postUpdated({ _id, editing: false })
}

const updatePostText = ({ _id, commentId }) => {
  turnOffEditing({ _id, commentId })
  let which, func, params
  let text = document.querySelector('#' + getEditId({ _id, commentId }))
  if (!text) return
  text = text.value.trim()
  if (!text.length) return

  if (commentId) {
    which = 'comment'
    func = updateComment
    params = { post: _id, _id: commentId, text }
  } else {
    which = 'post'
    func = updatePost
    params = { _id, text }
  }

  func(params).catch(() => {
    setDialog({
      title: 'Error...',
      message: `An error occurred updating this ${which}. Please try again later`,
      button1Txt: 'OK',
      button2Txt: null,
    })
  })
}

const PostText = ({ _id, commentId, editing, text }) => {
  const editId = getEditId({ _id, commentId })
  const update = () => updatePostText({ _id, commentId })
  const turnOff = () => turnOffEditing({ _id, commentId })
  return (
    <div className={css(style)}>
      {editing ? (
        <div>
          <textarea
            autoFocus
            id={editId}
            defaultValue={text}
            maxLength={maxPostText}
          />
          <div className="buttons">
            <button onClick={update}>Submit</button>
            <button onClick={turnOff} className="btn-alt">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        text
      )}
    </div>
  )
}

export default PostText
