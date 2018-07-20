import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { growIn } from '../../style/keyframes'
import { sizes, shadows, flexRowCenter, colors } from '../../style/theme'
import {
  loadContact,
  removeContact,
  setDialog,
  removeContactRange,
} from '../../redux/actions'
import Layout from '../../comps/Layout'
import getDate, { getDateFromVal } from '../../util/getDate'
import Icon from '@fortawesome/react-fontawesome'
import AdminRestrict from '../../comps/AdminRestrict'
import withLoginReload from '../../util/withLoginReload'
import getError from '../../util/getError'
import Spinner from '../../comps/Spinner'

const style = {
  padding: 10,
  width: '100%',
  maxWidth: sizes.maxBlockWidth,
  margin: 'auto',

  '& .delByRange': {
    margin: '10px 0 40px',
    ...flexRowCenter,
    flexWrap: 'wrap',

    '& h6': {
      width: '100%',
      marginBottom: 8,
    },

    '& div:nth-child(2)': {
      width: '100%',
    },

    '& label': {
      fontWeight: 700,
      margin: '10px 5px 0 0',
    },

    '& input': {
      border: 'none',
      padding: '0 4px',
      background: 'none',
      borderBottom: `1px solid ${colors.blackFg}`,
    },

    '& button': {
      margin: '10px 0 0 auto',
    },
  },

  '& .msg': {
    opacity: 0,
    width: '100%',
    borderRadius: 4,
    ...shadows.box,
    margin: '15px 0',
    position: 'relative',
    background: '#ffffff',
    padding: '2px 8px 4px',
    animation: `${growIn} 225ms ease-in-out forwards`,

    '& svg': {
      position: 'absolute',
      top: 5,
      right: 5,
      cursor: 'pointer',
    },

    '& p': {
      margin: '2px 0',
      wordWrap: 'break-word',

      ':nth-child(1)': {
        width: 'calc(100% - 25px)',
      },
    },

    '& span': {
      marginRight: 5,
      fontWeight: 700,
    },
  },

  '& .error': {
    padding: '5px 0',
    textAlign: 'center',
  },

  '& button': {
    display: 'block',
    margin: '10px auto',
  },
}

class Contact extends Component {
  static async getInitialProps() {
    await loadContact({ initial: true })
  }

  state = {
    numPrev: 0,
    numAdded: 0,
    dateDelNotSupprted: false,
  }

  static getDerivedStateFromProps({ contact }, state) {
    const { numPrev } = state
    const numCur = contact.ids.length

    if (numCur !== numPrev) {
      if (numCur === 0 && !contact.pending && contact.hasMore) {
        loadContact({})
      }
      return {
        numPrev: numCur,
        numAdded: numCur > numPrev ? numCur - numPrev : 0,
      }
    }
    return null
  }

  loadMore = () => loadContact({})

  removeMsg = e => {
    const { id } = e.currentTarget
    setDialog({
      message: 'Are you sure you want to permanently delete this message?',
      button1Act: () => {
        removeContact(id).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred deleting message'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  removeByRange = () => {
    let from = document.getElementById('from').value
    let to = document.getElementById('to').value
    if (!from || !to) return
    from = getDateFromVal(from).getTime()
    to = getDateFromVal(to).getTime()
    setDialog({
      message: `Are you sure you want to permanently delete messages received between 
      ${getDate(from)} ${getDate(to)}?`,
      button1Act: () => {
        removeContactRange(from, to).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred removing messages'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  componentDidMount() {
    const tstDate = document.createElement('input')
    tstDate.setAttribute('type', 'date')
    if (tstDate.type !== 'date') {
      this.setState({ dateDelNotSupprted: true })
    }
  }

  render() {
    const { contact } = this.props
    const { numAdded, dateDelNotSupprted } = this.state
    const { error, hasMore, ids, pending } = contact
    const idxOffset = ids.length - numAdded
    const noMsgs = !ids.length && !pending && !hasMore
    return (
      <Layout restrict>
        <AdminRestrict>
          <h5 style={{ padding: '10px 0 0 10px' }}>Contact messages</h5>
          <div className={css(style)}>
            {!noMsgs &&
              !dateDelNotSupprted && (
                <div className="delByRange">
                  <h6>Delete messages</h6>
                  <div>
                    <label htmlFor="from">From:</label>
                    <input type="date" id="from" />
                  </div>
                  <div>
                    <label htmlFor="to">To:</label>
                    <input type="date" id="to" />
                  </div>
                  <button onClick={this.removeByRange}>Delete</button>
                </div>
              )}

            {ids.map((id, idx) => {
              const { email, msg, name, createdAt } = contact[id]
              if (numAdded) {
                idx = idx > idxOffset ? idx - idxOffset : 0
              }
              return (
                <div
                  key={id}
                  className="msg"
                  style={{ animationDelay: idx * 50 + 'ms' }}
                >
                  <Icon icon="trash" id={id} onClick={this.removeMsg} />
                  <p>
                    <span>Name:</span>
                    {name}
                  </p>
                  <p>
                    <span>Email:</span>
                    {email}
                  </p>
                  <p>
                    <span>Sent:</span>
                    {getDate(createdAt)}
                  </p>
                  <p>
                    <span>Message:</span>
                    {msg}
                  </p>
                </div>
              )
            })}
            {noMsgs && <p className="errMsg">There are no messages yet</p>}
            {error && !pending && <p className="error">{error}</p>}
            {pending && <Spinner size={36} />}
            {hasMore &&
              !pending && (
                <button onClick={pending ? null : this.loadMore}>
                  Load more
                </button>
              )}
          </div>
        </AdminRestrict>
      </Layout>
    )
  }
}

export default withLoginReload(connect(({ contact }) => ({ contact }))(Contact))
