import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import checkFile from '../../util/checkFile'
import { setDialog } from '../../redux/actions'
import { colors, sizes, flexColCenter } from '../../style/theme'
import { chewMoveAnim, chewTopAnim, chewBotAnim } from '../../style/keyframes'

const style = {
  padding: 10,
  width: '100%',
  minHeight: 80,
  overflow: 'hidden',
  position: 'relative',
  maxWidth: sizes.maxBlockWidth,
  border: `1px dotted ${colors.blackFg}`,

  '& .select': {
    ...flexColCenter,
    textAlign: 'center',
    justifyContent: 'center',

    '& input': {
      display: 'none',
    },

    '& button': {
      margin: 10,
    },
  },

  '& .eatAnim': {
    width: 60,
    height: 60,
    position: 'absolute',
    transform: 'rotate(-30deg)',
    animation: `${chewMoveAnim(60)} 2.5s ease-in-out infinite`,

    '& .half': {
      width: 60,
      height: 30,
      overflow: 'hidden',
      textAlign: 'center',

      '& div': {
        width: 60,
        height: 60,
        borderRadius: 60,
        background: colors.yellow,
      },

      ':nth-child(1)': {
        position: 'relative',
        animation: `${chewTopAnim} 600ms ease-in-out infinite`,

        '& i': {
          top: 10,
          left: 24,
          width: 8,
          height: 8,
          borderRadius: 8,
          background: 'black',
          position: 'absolute',
        },
      },

      ':nth-child(2)': {
        animation: `${chewBotAnim} 600ms ease-in-out infinite`,
      },
    },
  },
}

class FileDropBox extends Component {
  constructor() {
    super()
    this.state = {
      fileIncoming: false,
    }
    this.className = css(style)
  }

  doFileCheck = file => {
    const { checkFileParams, onFileChange } = this.props
    if (file) {
      const check = checkFile({ ...checkFileParams, file })
      if (check.error) {
        return setDialog({
          title: 'Error...',
          message: check.error,
          button1Txt: 'OK',
          button2Txt: null,
        })
      }
    }
    if (typeof onFileChange === 'function') {
      onFileChange(file)
    }
  }

  handleChange = e => {
    const { files } = e.target
    const file = files.length ? files[0] : null
    this.doFileCheck(file)
  }

  handleDrop = e => {
    this.setState({ fileIncoming: false })
    const { files } = e.dataTransfer
    if (!files.length) return
    this.doFileCheck(files[0])
    e.preventDefault()
  }

  handleDragOver = e => {
    e.preventDefault()
    clearTimeout(this.timeout)
    this.setState({ fileIncoming: true })
  }

  handleDragLeave = () => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({ fileIncoming: false })
    }, 100)
  }

  focusInput = () => this.fileEl && this.fileEl.click()

  render() {
    const { fileIncoming } = this.state
    let { style, message } = this.props
    message = message || 'Drag and drop file or click below to select'

    return (
      <div
        {...{ style }}
        className={this.className}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
      >
        {!fileIncoming ? (
          <div className="select">
            <p>{fileIncoming ? 'incoming!!!!' : message}</p>
            <input
              type="file"
              onChange={this.handleChange}
              ref={el => (this.fileEl = el)}
            />
            <button onClick={this.focusInput}>Select file</button>
          </div>
        ) : (
          <div className="eatAnim">
            <div className="half">
              <div>
                <i />
              </div>
            </div>
            <div className="half">
              <div />
            </div>
          </div>
        )}
      </div>
    )
  }
}

FileDropBox.propTypes = {
  style: PropTypes.any,
  message: PropTypes.any,
  onFileChange: PropTypes.func,
  checkFileParams: PropTypes.object,
}

export default FileDropBox
