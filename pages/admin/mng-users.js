import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  listUsers,
  setDialog,
  removeAvatars,
  updateSettings,
  removeUsers,
} from '../../redux/actions'
import { sizes, media, flexRowCenter, colors } from '../../style/theme'
import Layout from '../../comps/Layout'
import Spinner from '../../comps/Spinner'
import getError from '../../util/getError'
import adminReload from '../../util/adminReload'
import Avatar from '../../comps/user/Avatar'
import AdminRestrict from '../../comps/AdminRestrict'
import List from 'react-virtualized/dist/commonjs/List'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import withLoginReload from '../../util/withLoginReload'

const style = {
  padding: 10,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& .wrap': {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    margin: '25px auto',
    flexDirection: 'column',
    maxWidth: sizes.maxBlockWidth,
  },

  '& .filter': {
    ...flexRowCenter,

    '& label': {
      marginRight: 10,
    },

    '& input': {
      padding: 5,
      flexGrow: 1,
      maxWidth: 260,
      border: 'none',
      background: 'none',
      borderBottom: `1px solid ${colors.blackFg}`,
    },
  },

  '& .selectBtns': {
    margin: '15px 0',

    '& button': {
      marginRight: 10,
    },
  },

  '& .err': {
    padding: '10px 0',
    textAlign: 'center',
  },

  '& .items': {
    flexGrow: 1,
    width: '100%',
    marginTop: 10,
  },

  '& .item': {
    padding: '0 0 5px',
    ...flexRowCenter,
    borderBottom: `1px solid ${colors.darkGrey}`,

    '&.loadMore': {
      borderBottom: 'none',

      '& button': {
        margin: 'auto',
      },
    },

    '& .avatar': {
      width: 40,
      height: 40,
      margin: '0 10px',
      cursor: 'pointer',
    },

    '& div': {
      paddingTop: 5,
      alignSelf: 'flex-start',

      '& p': {
        width: '100%',
      },
      '& p, & span>span': {
        fontWeight: 700,
      },
      '& .restr': {
        margin: '0 10px 0 0',
      },
    },
  },

  '& .settings': {
    marginTop: 15,

    '& h5': {
      marginBottom: 5,
    },

    '& div': {
      marginBottom: 5,
      ...flexRowCenter,
      flexWrap: 'wrap', 
    },

    '& label': {
      cursor: 'pointer',
      margin: '0 5px 0 0',
    },

    '& button': {
      height: 26,
      marginTop: 10,

      ':nth-child(1)': {
        width: 142,
        marginRight: 10,
        marginLeft: 'auto',
      },
      ':nth-child(2)': {
        width: 130,
        marginRight: 10,
      },
      ':nth-child(3)': {
        width: 120,
      },

      [media.lessThan(432)]: {
        ':nth-child(3)': {
          marginRight: 10,  
          marginLeft: 'auto',
        }
      },
    },
  },
}

class MngUsers extends Component {
  static async getInitialProps() {
    await listUsers({ initial: true })
  }

  state = {
    filter: '',
    checked: {},
    admin: false,
    posting: true,
    making_pages: true,
    removePending: false,
    avatarsPending: false,
    settingsPending: false,
    updating_profile: true,
  }

  restricts = [
    { label: 'Posting', key: 'posting' },
    { label: 'Making pages', key: 'making_pages' },
    { label: 'Updating profile', key: 'updating_profile' },
  ]

  handleSetting = e => {
    const { id } = e.target
    this.setState({ [id]: !this.state[id] })
  }

  toggleCheck = e => {
    const { checked } = this.state
    let { id } = e.target
    id = id.substr(5)
    if (checked[id]) delete checked[id]
    else checked[id] = true
    this.setState({ checked })
  }

  selectAll = () => {
    const checked = {}
    this.props.mngUsers.ids.forEach(id => (checked[id] = true))
    this.setState({ checked })
  }

  handleFilter = e => {
    const filter = e.target.value
    this.setState({ filter })
    clearTimeout(this.filterTime)
    this.filterTime = setTimeout(() => {
      listUsers({ initial: true, filter })
    }, 350)
  }

  loadMore = () => listUsers({ filter: this.state.filter })
  getChecked = () => Object.keys(this.state.checked)
  clearAll = () => this.setState({ checked: {} })
  getS = len => (len === 1 ? "'s" : "s'")
  yesNo = val => (val ? 'yes' : 'no')
  onOff = val => (val ? 'on' : 'off')

  resetAvatars = () => {
    const ids = this.getChecked()
    const s = this.getS(ids.length)
    if (!ids.length) return
    setDialog({
      message: `Are you sure you want to reset ${ids.length} user${s} avatar?`,
      button1Act: () => {
        const done = () => this.setState({ avatarsPending: false })
        this.setState({ avatarsPending: true })
        removeAvatars(ids)
          .then(() => done())
          .catch(err => {
            done()
            setDialog({
              title: 'Error...',
              message: getError(err, 'An error occurred resetting the avatars'),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  submitSettings = () => {
    const { admin, posting, making_pages, updating_profile } = this.state
    const ids = this.getChecked()
    const s = this.getS(ids.length)
    if (!ids.length) return
    setDialog({
      message: `Are you sure you want to update ${
        ids.length
      } user${s} settings to 
                Admin: ${this.yesNo(admin)}, Posting: ${this.onOff(posting)}, 
                Making pages: ${this.onOff(making_pages)}, Updating profile: 
                ${this.onOff(updating_profile)}`,
      button1Act: () => {
        const done = () => this.setState({ settingsPending: false })
        this.setState({ settingsPending: true })
        updateSettings(ids, { admin, posting, making_pages, updating_profile })
          .then(() => done())
          .catch(err => {
            done()
            setDialog({
              title: 'Error...',
              message: getError(err, 'An error occurred updating settings'),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  deleteUsers = () => {
    const ids = this.getChecked()
    const s = ids.length === 1 ? '' : 's'
    if (!ids.length) return
    setDialog({
      message: `Are you sure you want to delete ${
        ids.length
      } user${s}? This can not be undone and will delete all of the users posts and comments.`,
      button1Act: () => {
        const done = () => this.setState({ removePending: false })
        this.setState({ removePending: true })
        removeUsers(ids)
          .then(() => done())
          .catch(err => {
            done()
            setDialog({
              title: 'Error...',
              message: getError(err, 'An error occurred removing the user' + s),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  rowRenderer = ({ index, style, key }) => {
    const { checked } = this.state
    const { mngUsers, users } = this.props
    if (index === mngUsers.ids.length) {
      return (
        <div {...{ style, key }} className="item loadMore">
          <button onClick={this.loadMore}>Load more</button>
        </div>
      )
    }
    const _id = mngUsers.ids[index]
    const { avatar, firstName, lastName, username, role, restricts } =
      users[_id] || {}
    const isAdmin = role === 'admin'
    return (
      <div {...{ style, key }} className="item">
        <input
          type="checkbox"
          id={'check' + _id}
          checked={Boolean(checked[_id])}
          onChange={this.toggleCheck}
        />
        <label htmlFor={'check' + _id}>
          <Avatar {...{ avatar }} className="avatar" />
        </label>
        <div>
          <p>{firstName + ' ' + lastName + ' - @' + username}</p>
          {this.restricts.map(({ label, key }, i) => (
            <span className="restr" key={i}>
              {`${label}: `}
              <span>{restricts[key] ? 'off' : 'on'}</span>
            </span>
          ))}
          <span className="restr">
            Admin: <span>{isAdmin ? 'yes' : 'no'}</span>
          </span>
        </div>
      </div>
    )
  }

  noRowsRenderer = () => (
    <div style={{ textAlign: 'center' }}>No users found</div>
  )

  render() {
    const {
      removePending,
      avatarsPending,
      settingsPending,
      filter,
    } = this.state
    const { mngUsers } = this.props
    const { error, ids, pending, hasMore } = mngUsers
    const rowHeight = 65 // height of .item
    let rowCount = ids.length
    if (hasMore && !pending) rowCount++

    return (
      <Layout restrict>
        <AdminRestrict>
          <div className={css(style)}>
            <h5>Manage users</h5>
            <div className="wrap">
              <div className="filter">
                <label htmlFor="filter">Filter users: </label>
                <input
                  id="filter"
                  type="text"
                  value={filter}
                  maxLength="128"
                  onChange={this.handleFilter}
                  placeholder="username, first name, or last name"
                />
                {pending && <Spinner className="loading" size={20} />}
              </div>
              <div className="selectBtns">
                <button onClick={this.selectAll}>Select all</button>
                <button onClick={this.clearAll} className="btn-alt">
                  Clear all
                </button>
              </div>
              {error && <p className="err">{error}</p>}
              <div
                className="items"
                style={{
                  minHeight:
                    ids.length < 6
                      ? rowHeight * (rowCount || 1)
                      : rowHeight * 6,
                  maxHeight: ids.length < 4 ? rowHeight * rowCount : null,
                }}
              >
                <AutoSizer>
                  {({ width, height }) => (
                    <List
                      width={width}
                      height={height}
                      rowCount={rowCount}
                      rowHeight={rowHeight}
                      style={{ outline: 0 }}
                      rowRenderer={this.rowRenderer}
                      noRowsRenderer={this.noRowsRenderer}
                    />
                  )}
                </AutoSizer>
              </div>
              <div className="settings">
                <h5>New settings</h5>
                <div>
                  <label htmlFor="admin">Admin: </label>
                  <input
                    id="admin"
                    type="checkbox"
                    checked={this.state.admin}
                    onChange={this.handleSetting}
                  />
                </div>
                {this.restricts.map(({ label, key }) => (
                  <div key={key}>
                    <label htmlFor={key}>{label}: </label>
                    <input
                      id={key}
                      type="checkbox"
                      checked={this.state[key]}
                      onChange={this.handleSetting}
                    />
                  </div>
                ))}
                <div>
                  <button
                    onClick={settingsPending ? null : this.submitSettings}
                  >
                    {settingsPending ? (
                      <Spinner size={18} alt />
                    ) : (
                      'Submit settings'
                    )}
                  </button>
                  <button
                    className="btn-alt"
                    onClick={avatarsPending ? null : this.resetAvatars}
                  >
                    {avatarsPending ? <Spinner size={18} /> : 'Reset avatars'}
                  </button>
                  <button onClick={removePending ? null : this.deleteUsers}>
                    {removePending ? <Spinner size={18} alt /> : 'Delete users'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AdminRestrict>
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ mngUsers, users }) => ({ mngUsers, users }))(MngUsers),
  null,
  adminReload
)
