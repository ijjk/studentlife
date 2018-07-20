import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { brand } from '../util/config'
import { logout } from '../redux/actions'
import {
  media,
  sizes,
  colors,
  shadows,
  flexRowCenter,
  noTapHighlight,
} from '../style/theme'
import Link from 'next/link'
import SearchBox from './SearchBox'
import Avatar from './user/Avatar'
import Icon from '@fortawesome/react-fontawesome'

const style = css({
  ...shadows.box,
  ...shadows.text,
  ...flexRowCenter,
  width: '100%',
  color: '#ffffff',
  userSelect: 'none',
  padding: '0 15px 0 10px',
  background: colors.blueMix,

  '& .brand': {
    fontSize: 26,
    marginRight: 15,
  },

  '& .account': {
    marginRight: 15,
    cursor: 'pointer',
    ...flexRowCenter,
    userSelect: 'none',
    textShadow: 'none',
    position: 'relative',

    '&.active': {
      '& p svg': {
        transform: 'rotate(180deg)',
      },

      '& .dropdown': {
        height: 52,
      },
    },

    '& p svg': {
      marginLeft: 5,
      transition: 'transform 250ms ease-in-out',
    },

    '& .dropdown': {
      overflow: 'hidden',
      position: 'absolute',
      top: 'calc(100% + 5px)',
      right: 0,
      height: 0,
      width: 150,
      textAlign: 'center',
      borderRadius: 3,
      ...shadows.box,
      transition: 'height 150ms ease-in-out',

      '& p': {
        background: '#ffffff',
        color: colors.blackFg,
        borderTop: `1px solid ${colors.blackFg}`,
        padding: '5px 0',
        lineHeight: 1,

        ':nth-child(1)': {
          border: 'none',
        },

        ':hover': {
          background: colors.grey,
        },
      },
    }, // .dropdown
  }, // .account

  '& .expandBtn': {
    display: 'none',
    margin: '0 15px 0 auto',

    '& div': {
      width: 33,
      height: 2,
      background: '#ffffff',
      margin: '4px 0',
      cursor: 'pointer',
      transform: 'rotate(0)',
      borderRadius: 1,
      ...noTapHighlight,
      transition: 'all 150ms ease-in-out',
    },
  }, // .expandBtn

  [media.lessThan(sizes.mobileBreak)]: {
    '& .account': {
      display: 'none',
    },
    '& .expandBtn': {
      display: 'block',
    },
  },
})

class Header extends Component {
  state = {
    dropdown: false,
  }

  toggleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown })
  }

  checkDropdown = e => {
    if (!this.accountEl || this.accountEl.contains(e.target)) {
      return
    }
    this.setState({ dropdown: false })
  }

  componentDidMount() {
    window.addEventListener('click', this.checkDropdown)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.checkDropdown)
  }

  render() {
    const { dropdown, expanded } = this.state
    const { basicHeader, className, users } = this.props
    const { username, avatar } = users[users.curUser] || {}

    return (
      <header className={`${style} ${className || ''}`}>
        <p className="brand">{brand} STUDENTLIFE</p>
        {username && !basicHeader ? (
          <div style={{ flexGrow: 1, ...flexRowCenter }}>
            <SearchBox />

            <div
              onClick={this.toggleDropdown}
              ref={el => (this.accountEl = el)}
              className={'account' + (dropdown ? ' active' : '')}
            >
              <Avatar
                {...{ avatar }}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: 40,
                }}
              />
              <p>
                <span>{username}</span>
                <Icon icon="caret-down" style={{ height: 16 }} />
              </p>
              <div className="dropdown">
                <Link href="/settings">
                  <p>Account settings</p>
                </Link>
                <p onClick={logout}>Log out</p>
              </div>
            </div>

            <label
              htmlFor="navExpanded"
              className={'expandBtn' + (expanded ? ' active' : '')}
            >
              <div /> <div /> <div />
            </label>
          </div>
        ) : null}
      </header>
    )
  }
}

export default connect(({ users }) => ({ users }))(Header)
