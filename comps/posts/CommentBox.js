import React from 'react'
import { css } from 'glamor'
import { maxCmntText } from '../../util/config'
import { flexRowCenter, shadows } from '../../style/theme'
import { createComment, setDialog } from '../../redux/actions'

const style = {
  width: '100%',
  ...shadows.box,
  margin: '10px 0 0',
  borderRadius: 3,
  ...flexRowCenter,
  background: '#ffffff',

  '& textarea': {
    height: 24,
    outline: 0,
    padding: '3px 8px',
    flexGrow: 1,
    fontSize: 16,
    lineHeight: 1,
    border: 'none',
    marginRight: 2,
  },
  '& button': {
    margin: 3,
  },
}

const submitReply = _id => {
  const el = document.querySelector('#reply' + _id)
  if (!el) return
  const text = el.value.trim()
  if (!text.length) return
  el.value = ''
  createComment({ postId: _id, text }).catch(() => {
    setDialog({
      title: 'Error...',
      message: 'An error occurred while submitting your reply',
      button1Txt: 'OK',
      button2Txt: null,
    })
  })
}

const CommentBox = ({ _id }) => (
  <div className={css(style)}>
    <textarea
      id={'reply' + _id}
      maxLength={maxCmntText}
      placeholder="Reply to the post..."
    />
    <button onClick={() => submitReply(_id)}>Submit</button>
  </div>
)

export default CommentBox
