import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { flexRowCenter, sizes, colors } from '../style/theme'
import Layout from '../comps/Layout'
import Avatar from '../comps/user/Avatar'
import FileDropBox from '../comps/util/FileDropBox'
import {
  createAvatar,
  updateUser,
  removeAvatar,
  setDialog,
} from '../redux/actions'
import getError from '../util/getError'

const style = {
  padding: 10,

  '& .info': {
    ...flexRowCenter,
    flexWrap: 'wrap',
    alignItems: 'flex-start',

    '& .avatar': {
      width: 72,
      height: 72,
    },
    '& p': {
      fontWeight: 700,
      margin: '5px 0 0 10px',
    },
  },

  '& .wrap': {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px auto',
    maxWidth: sizes.maxBlockWidth,
  },

  '& .fields': {
    margin: '10px auto',

    '& div': {
      width: '100%',
      display: 'flex',
      margin: '10px 0',
      flexWrap: 'wrap',
    },

    '& label': {
      marginTop: 5,
    },

    '& input': {
      border: 'none',
      background: 'none',
      padding: '5px 8px',
      borderBottom: `1px solid ${colors.blackFg}`,
    },

    '& button:nth-child(1)': {
      margin: '0 10px 0 auto',
    },
  },
}

const fields = ['username']

class Settings extends Component {
  constructor(props) {
    super(props)
    const { users } = props
    const { username } = users[users.curUser]
    this.state = {
      file: null,
      changes: {},
      error: null,
      previewData: null,
      username: username || '',
    }
  }

  handleFile = file => {
    const { changes } = this.state
    const state = {}
    if (!file) {
      delete changes.avatar
      state.previewData = null
    } else {
      changes.avatar = true
    }
    this.setState({ ...state, changes, file })
  }

  previewAvatar = previewData => {
    this.setState({ previewData })
  }

  removeAvatar = () => {
    setDialog({
      message: 'Are you sure you want to delete your avatar?',
      button1Act: () =>
        removeAvatar().catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred removing avatar'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        }),
    })
  }

  handleField = e => {
    const { changes } = this.state
    const { users } = this.props
    const user = users[users.curUser]
    const key = e.target.id
    const val = e.target.value.trim()
    if (user[key] !== val && val.length) {
      changes[key] = true
    } else {
      delete changes[key]
    }
    this.setState({ [key]: val, changes })
  }

  reset = () => {
    const toReset = { changes: {}, previewData: null, file: null }
    const { users } = this.props
    const user = users[users.curUser]
    fields.forEach(f => (toReset[f] = user[f]))
    this.setState(toReset)
  }

  submit = () => {
    const { users } = this.props
    let { changes, file } = this.state
    changes = { ...changes }
    const avatar = Boolean(changes.avatar)
    delete changes.avatar
    const updated = {}
    const keys = Object.keys(changes)
    if (!keys.length && !avatar) return
    keys.forEach(f => (updated[f] = this.state[f]))
    if (keys.length) {
      updateUser({ _id: users.curUser, ...updated })
        .then(() => avatar && createAvatar(file))
        .then(() => this.reset())
        .catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred updating settings'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
    } else {
      createAvatar(file).then(() => this.reset())
    }
  }

  render() {
    const { changes, error, previewData } = this.state
    const { users } = this.props
    const { curUser, avatarProgress, avatarError } = users
    const { restricts, avatar, firstName, lastName, username } =
      users[curUser] || {}
    if (restricts && restricts.updating_profile) {
      return (
        <Layout restrict>
          <p className="errMsg">
            Updating profile is currently disabled for your account
          </p>
        </Layout>
      )
    }
    return (
      <Layout className={css(style)} restrict>
        <div className="info">
          <Avatar {...{ avatar }} src={previewData} className="avatar" />
          <p>{`${firstName} ${lastName} - @${username}`}</p>
        </div>
        <FileDropBox
          onFileChange={this.handleFile}
          style={{ margin: '25px auto 0' }}
          checkFileParams={{ imageOnly: true, previewCb: this.previewAvatar }}
          message="Drag and drop picture or click below to select avatar"
        />
        {avatar && (
          <div className="wrap">
            <button onClick={this.removeAvatar} style={{ marginLeft: 'auto' }}>
              Remove avatar
            </button>
          </div>
        )}
        <div className="wrap fields">
          <div>
            <label htmlFor="username">New username: </label>
            <input
              type="text"
              id="username"
              maxLength="16"
              placeholder="New username"
              value={this.state.username}
              onChange={this.handleField}
            />
          </div>
          {Object.keys(changes).length > 0 && (
            <div>
              <button className="btn-alt" onClick={this.reset}>
                Reset
              </button>
              <button onClick={avatarProgress ? null : this.submit}>
                {avatarProgress ? avatarProgress + '%' : 'Submit'}
              </button>
            </div>
          )}
          <div>{(avatarError || error) && <p>{avatarError || error}</p>}</div>
        </div>
      </Layout>
    )
  }
}

export default connect(({ users }) => ({ users }))(Settings)
