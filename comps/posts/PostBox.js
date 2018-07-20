import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'
import { sizes, shadows, flexRowCenter } from '../../style/theme'
import Icon from '@fortawesome/react-fontawesome'
import { createPost, setDialog } from '../../redux/actions'
import { maxPostText } from '../../util/config'
import checkFile from '../../util/checkFile'

const styles = {
  width: '100%',
  textAlign: 'center',
  padding: '30px 10px 10px',

  '& .error': {
    padding: '0 0 15px',
  },

  '& .box': {
    width: '100%',
    ...shadows.box,
    margin: 'auto',
    borderRadius: 3,
    ...flexRowCenter,
    background: '#ffffff',
    maxWidth: sizes.maxBlockWidth,
  }, // .box

  '& .preview': {
    width: '100%',
    textAlign: 'left',
    padding: '0 10px',

    '& img': {
      maxHeight: 125,
      maxWidth: '50%',
    },
  },

  '& textarea': {
    outline: 0,
    height: 36,
    flexGrow: 1,
    border: 'none',
    overflow: 'hidden',
    background: 'none',
    padding: '10px 8px',
    transition: 'height 150ms ease-in-out',
    '::placeholder': {
      opacity: 1,
    },
  }, // textarea

  '& input': {
    display: 'none',
  },

  '& .buttons': {
    ...flexRowCenter,

    '& button': {
      margin: '5px 4px 5px auto',

      ':nth-child(1)': {
        display: 'none',
        marginLeft: 4,
      },

      '&:disabled': {
        '&:hover, &:active': {
          ...shadows.box,
        },
      },
    },
  }, // .buttons

  '& .box.expanded': {
    flexWrap: 'wrap',

    '& textarea': {
      height: 72,
      width: '100%',
      overflow: 'auto',
    },

    '& .buttons': {
      width: '100%',

      '& p': {
        marginLeft: 5,
        '& span': {
          fontWeight: 700,
        },
        '& svg': {
          marginLeft: 5,
          cursor: 'pointer',
        },
      },

      '& button': {
        // marginBottom: 8,

        ':nth-child(1)': {
          display: 'block',
        },
      },
    },
  }, // .box.expanded
}

class PostBox extends Component {
  state = {
    text: '',
    file: null,
    hasImg: false,
    preview: null,
    pending: false,
    expanded: false,
  }

  handleText = e => this.setState({ text: e.target.value })

  handleFile = e => {
    const { files } = e.target
    const file = files.length ? files[0] : null
    this.doFileCheck(file)
  }

  doFileCheck = file => {
    this.setState({ file: null, preview: null })
    if (file) {
      const check = checkFile({ file, previewCb: this.previewCb })
      if (check.error) {
        this.fileEl.value = null
        return setDialog({
          title: 'Error...',
          button1Txt: 'OK',
          button2Txt: null,
          message: check.error,
        })
      }
    }
    this.setState({ file })
  }

  previewCb = dataUri => {
    this.setState({ preview: dataUri })
  }

  expand = () => {
    clearTimeout(this.timeout)
    this.timeout = null
    this.setState({ expanded: true })
  }

  stopShrink = e => {
    if (e.target.tagName !== 'BUTTON') return
    this.timeout = setTimeout(() => (this.timeout = null), 50)
  }

  shrink = () => {
    const { file, text } = this.state
    if (file || text || this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
      return
    }
    this.setState({ expanded: false })
  }

  addFile = () => this.fileEl.click()

  removeFile = () => {
    this.fileEl.value = null
    this.setState({ file: null, preview: null })
    setTimeout(() => this.shrink(), 1)
  }

  submit = () => {
    const { text, file } = this.state
    createPost({ text, file })
  }

  handleDragOver = e => {
    this.expand()
    e.preventDefault()
    clearTimeout(this.timeout)
    this.timeout = null
  }

  handleDragLeave = () => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.timeout = null
      this.shrink()
    }, 100)
  }

  handleDrop = e => {
    const { files } = e.dataTransfer
    if (!files.length) return
    this.doFileCheck(files[0])
    e.preventDefault()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  static getDerivedStateFromProps(props, state) {
    const { pending, error } = props.post
    if (state.pending && !pending && !error) {
      return {
        text: '',
        file: null,
        preview: null,
        expanded: false,
        pending,
      }
    } else if (state.pending !== pending) {
      return { pending }
    }
    return null
  }

  render() {
    const { users, post } = this.props
    const { expanded, file, text, preview } = this.state
    let filename
    if (file) {
      filename = file.name
      if (filename.length > 16) {
        filename = filename.substr(0, 13) + '...'
      }
    }
    return (
      <div className={css(styles)}>
        {post.error && <p className="error">{post.error}</p>}
        {(() => {
          if (users[users.curUser].restricts.posting) {
            return <p>Posting is disabled for your account</p>
          }
          return (
            <div
              onDrop={this.handleDrop}
              onMouseDown={this.stopShrink}
              onDragOver={this.handleDragOver}
              onDragLeave={this.handleDragLeave}
              className={'box' + (expanded ? ' expanded' : '')}
            >
              <textarea
                value={text}
                id="PostBox"
                maxLength={maxPostText}
                placeholder="What would you like to post?"
                onBlur={this.shrink}
                onFocus={this.expand}
                onChange={this.handleText}
              />
              <input
                type="file"
                onChange={this.handleFile}
                ref={el => (this.fileEl = el)}
              />
              {preview && (
                <div className="preview">
                  <img src={preview} alt="attachment preview" />
                </div>
              )}
              <div className="buttons">
                <button
                  onClick={this.addFile}
                  title="Drag and drop or click to attach file"
                >
                  Attach file
                </button>
                {filename && (
                  <p>
                    <span>File: </span>
                    {filename}
                    <Icon
                      icon="trash"
                      style={{ height: 16 }}
                      onClick={this.removeFile}
                    />
                  </p>
                )}
                {post.pending ? (
                  <button disabled={true}>{post.progress + '%'}</button>
                ) : (
                  <button onClick={this.submit}>Submit</button>
                )}
              </div>
            </div>
          )
        })()}
      </div>
    )
  }
}

export default connect(({ users, post }) => ({ users, post }))(PostBox)
