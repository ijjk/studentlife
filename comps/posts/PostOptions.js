import React, { Component } from 'react'
import { css } from 'glamor'
import { shadows, colors } from '../../style/theme'
import {
  updatePost,
  removePost,
  setDialog,
  removeComment,
  commentUpdated,
  updateComment,
  postUpdated,
} from '../../redux/actions'
import Icon from '@fortawesome/react-fontawesome'

const style = {
  position: 'relative',

  '& svg': {
    cursor: 'pointer',
  },

  '& .options': {
    top: 0,
    right: 30,
    height: 0,
    width: 115,
    zIndex: 3,
    ...shadows.box,
    borderRadius: 3,
    overflow: 'hidden',
    position: 'absolute',
    background: '#ffffff',
    transition: 'height 150ms ease-in-out',

    '&.active': {
      height: 'auto',
      minHeight: 25,
    },

    '& .opt': {
      padding: '4px 0',
      cursor: 'pointer',
      userSelect: 'none',
      textAlign: 'center',
      borderBottom: `1px solid ${colors.grey}`,

      ':hover': {
        background: colors.grey,
      },
    },
  }, // .options
}

class PostOptions extends Component {
  state = {
    show: false,
  }

  toggleShow = () => this.setState({ show: !this.state.show })

  askAndDo = ({ message, errMessage, toDo }) => {
    this.toggleShow()
    setDialog({
      message,
      button1Act: () => {
        toDo().catch(() => {
          setDialog({
            title: 'Error...',
            message: errMessage,
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  report = () => {
    const { _id, commentId } = this.props
    const which = commentId ? 'comment' : 'post'
    this.askAndDo({
      message: `Are you sure you want to report this ${which}?`,
      errMessage: `An error occurred reporting the ${which}`,
      toDo: commentId
        ? () => updateComment({ _id: commentId, reported: true })
        : () => updatePost({ _id, reported: true }),
    })
  }

  unreport = () => {
    const { _id, commentId } = this.props
    this.askAndDo({
      message: 'Are you sure you want to dismiss this reporting?',
      errMessage: 'An error occurred dismissing the reporting',
      toDo: commentId
        ? () => updateComment({ _id: commentId, reported: false })
        : () => updatePost({ _id, reported: false }),
    })
  }

  archive = () => {
    const { _id, commentId, users } = this.props
    const delWord = users[users.curUser].isAdmin ? 'archive' : 'delete'
    const altDelWord = delWord.substr(0, delWord.length - 1) + 'ing'
    const which = commentId ? 'comment' : 'post'
    this.askAndDo({
      message: `Are you sure you want to ${delWord} this ${which}?`,
      errMessage: `An error occurred ${altDelWord} this ${which}`,
      toDo: commentId
        ? () => updateComment({ _id: commentId, archived: true })
        : () => updatePost({ _id, archived: true }),
    })
  }

  edit = () => {
    this.toggleShow()
    const { _id, commentId } = this.props
    if (commentId) {
      return commentUpdated({ post: _id, _id: commentId, editing: true })
    }
    postUpdated({ _id, editing: true })
  }

  delete = () => {
    const { _id, commentId } = this.props
    const which = commentId ? 'comment' : 'post'
    this.askAndDo({
      message: `Are you sure you want to delete this ${which}. This can not be undone.`,
      errMessage: `An error occurred while deleting this ${which}`,
      toDo: commentId ? () => removeComment(commentId) : () => removePost(_id),
    })
  }

  shouldHide = e => {
    if (!this.mainEl || this.mainEl.contains(e.target)) return
    this.setState({ show: false })
  }

  componentDidMount() {
    window.addEventListener('click', this.shouldHide)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.shouldHide)
  }

  render() {
    const { reported, archived, createdBy, users } = this.props
    const { show } = this.state
    const { isAdmin } = users[users.curUser]
    const isAuthor = Boolean(createdBy === users.curUser)
    let reportText = 'Report',
      reportAct = this.report

    if (reported) {
      reportAct = isAdmin ? this.unreport : null
      reportText = isAdmin ? 'Dismiss report' : 'Reported'
    }

    return (
      <div
        className={css(style) + ' PostOptions'}
        ref={el => (this.mainEl = el)}
      >
        <Icon
          icon="ellipsis-v"
          style={{ height: 20, width: 15 }}
          onClick={this.toggleShow}
        />
        <div className={'options' + (show ? ' active' : '')}>
          {(archived && reported) ||
            (!archived && (
              <div onClick={reportAct} className="opt">
                {reportText}
              </div>
            ))}
          {!archived && (isAuthor || isAdmin) ? (
            <div onClick={this.edit} className="opt" id={show ? 'edit' : null}>
              Edit
            </div>
          ) : null}
          {!archived && (isAuthor || isAdmin) ? (
            <div
              className="opt"
              onClick={this.archive}
              id={!isAdmin && show ? 'delete' : null}
            >
              {isAdmin ? 'Archive' : 'Delete'}
            </div>
          ) : null}
          {isAdmin ? (
            <div
              className="opt"
              onClick={this.delete}
              id={isAdmin && show ? 'delete' : null}
            >
              Delete
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default PostOptions
