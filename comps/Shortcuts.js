import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { css } from 'glamor'
import { flexRowCenter, colors, shadows } from '../style/theme'
import { logout } from '../redux/actions'

const style = {
  top: 0,
  left: 0,
  height: 0,
  zIndex: 10,
  opacity: 0,
  width: '100%',
  ...flexRowCenter,
  position: 'fixed',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.6)',
  transition: 'opacity 150ms ease-in-out',

  '&.active': {
    opacity: 1,
    height: '100%',
  },

  '& .wrap': {
    width: '100%',
    height: '100%',
    maxWidth: 600,
    maxHeight: 400,
    ...shadows.box,
    overflow: 'auto',
    borderRadius: 4,
    margin: '-5% auto 0',
    position: 'relative',
    padding: '2px 10px 20px',
    background: colors.whiteBg,

    '& .close': {
      top: 0,
      right: 5,
      padding: 0,
      fontSize: 26,
      float: 'right',
      fontWeight: 700,
      cursor: 'pointer',
      background: 'none',
      position: 'absolute',
    },

    '& p': {
      padding: '8px 0',
      borderBottom: `1px solid ${colors.blackFg}`,
      '& .title': {
        fontWeight: 700,
        textAlign: 'center',
      },
      '& span': {
        fontWeight: 700,
        borderRadius: 2,
        padding: '1px 5px',
        background: colors.grey,
      },
    },
  },
}

const keys = {
  navigation: [
    { keys: ['g', 'h'], msg: '%k then %k navigate to home' },
    { keys: ['g', 'n'], msg: '%k then %k navigate to news' },
    { keys: ['g', 'p'], msg: '%k then %k navigate to pages' },
    { keys: ['g', 'r'], msg: '%k then %k navigate to resources' },
    { keys: ['g', 'o'], msg: '%k then %k navigate to opportunities' },
    { keys: ['g', 's'], msg: '%k then %k navigate to account settings' },
    {
      keys: ['g', 'a'],
      msg: '%k then %k navigate to admin panel',
      admin: true,
    },
    { keys: ['g', 'l'], msg: '%k then %k logout' },
  ],
  actions: [
    { keys: ['shift', 'p'], msg: '%k then %k focus new post box if present' },
    { keys: ['shift', 's'], msg: '%k + %k focus search bar' },
    {
      keys: ['e'],
      msg: 'When on a page that allows editing pressing %k will open edit area',
    },
    {
      keys: ['d'],
      msg: 'When on a page with a single delete button %k will trigger it',
    },
    { keys: ['?'], msg: '%k show this window' },
  ],
}

const _ = q => document.querySelector(q)
const go = path => Router.push(path)
const click = el => {
  el = _(el)
  el && setTimeout(() => el.click(), 1)
}
const focus = el => {
  el = _(el)
  el && setTimeout(() => el.focus(), 1)
}

class ShortcutKeys extends Component {
  state = {
    show: false,
  }
  keyEvts = false
  prevKey = null
  shift = false

  hide = () => this.setState({ show: false })

  handleKey = e => {
    const tag = e.target.tagName
    const key = e.which || e.keyCode
    const prevG = Boolean(this.prevKey === 71) // was prev key g
    const isInputEl = Boolean(tag === 'TEXTAREA' || tag === 'INPUT')

    if (key === 27) {
      // escape was pressed
      if (this.state.show) {
        this.setState({ show: false })
      } else if (isInputEl) {
        e.target.blur()
      } else {
        click('#escape')
      }
    }
    if (isInputEl) return

    if (prevG) {
      switch (key) {
        case 72:
          go('/home')
          break
        case 80:
          go('/page')
          break
        case 82:
          go('/resource')
          break
        case 79:
          go('/opportunities')
          break
        case 78:
          go('/news')
          break
        case 83:
          go('/settings')
          break
        case 65:
          go('/admin')
          break
        case 76:
          logout()
          break
        default:
          break
      }
    }
    switch (key) {
      case 67:
        click('#create')
        break
      case 68:
        click('#delete')
        break
      case 69:
        click('#edit')
        break
      default:
        break
    }

    if (this.shift) {
      switch (key) {
        case 191:
          this.setState({ show: true })
          break
        case 83:
          focus('#Search')
          break
        case 80:
          focus('#PostBox')
          break
        default:
          break
      }
    }

    if (key === 16) this.shift = true
    this.prevKey = key
  }

  handleKeyUp = e => {
    const key = e.which || e.keyCode
    if (key === 16) this.shift = false
  }

  setup = () => {
    window.addEventListener('keydown', this.handleKey)
    window.addEventListener('keyup', this.handleKeyUp)
    this.isSetup = true
  }

  teardown = () => {
    window.removeEventListener('keydown', this.handleKey)
    window.removeEventListener('keyup', this.handleKeyUp)
    this.isSetup = false
  }

  checkKeyEvts = () => {
    const { users } = this.props
    if (users.curUser && !this.isSetup) this.setup()
    else if (!users.curUser && this.isSetup) this.teardown()
  }

  componentDidUpdate = () => this.checkKeyEvts()
  componentDidMount = () => this.checkKeyEvts()
  componentWillUnmount = () => this.teardown()

  render() {
    const { users } = this.props
    const { show } = this.state
    const user = users[users.curUser] || {}

    return (
      <div className={css(style) + (!show ? '' : ' active')}>
        <div className="wrap">
          <span onClick={this.hide} className="close">
            X
          </span>
          <p>
            Keyboard shortcuts: (shortcuts do not work when focused on an input)
          </p>
          {(() => {
            const toReturn = []
            Object.keys(keys).forEach(cat => {
              keys[cat].forEach((kObj, idx) => {
                if (kObj.admin && !user.isAdmin) return
                const kRet = []
                const { msg, keys } = kObj
                let lastInsert = 0
                msg.split('%k').forEach((part, pIdx) => {
                  if (
                    part.trim().length === 0 ||
                    (lastInsert + pIdx) % 2 !== 0
                  ) {
                    kRet.push(
                      <span key={cat + '-' + pIdx}>{keys[lastInsert]}</span>
                    )
                    lastInsert += 1
                  }
                  kRet.push(part)
                })
                toReturn.push(<p key={cat + idx}>{kRet}</p>)
              })
            })
            return toReturn
          })()}
        </div>
      </div>
    )
  }
}

export default connect(({ users }) => ({ users }))(ShortcutKeys)
