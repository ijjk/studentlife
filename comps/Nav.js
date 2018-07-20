import React from 'react'
import { css } from 'glamor'
import { sizes, flexRowCenter, colors, media, shadows } from '../style/theme'
import { connect } from 'react-redux'
import Icon from '@fortawesome/react-fontawesome'
import ActiveLink from './util/ActiveLink'
import { logout } from '../redux/actions'

const links = [
  {
    label: 'Home',
    icon: 'home',
    href: '/home',
  },
  {
    label: 'News',
    icon: 'bullhorn',
    href: '/news',
  },
  {
    label: 'Pages',
    icon: 'file-alt',
    href: '/page',
  },
  {
    label: 'Resources',
    icon: 'external-link-alt',
    href: '/resource',
  },
  {
    label: 'Opportunities',
    icon: 'handshake',
    href: '/opportunities',
  },
  {
    label: 'Admin panel',
    icon: 'cog',
    href: '/admin',
  },
  {
    label: 'Account settings',
    href: '/settings',
    mobile: true,
  },
]

const navStyle = {
  top: 55,
  left: 0,
  height: 0,
  zIndex: 5,
  width: '100%',
  display: 'flex',
  ...shadows.text,
  overflow: 'hidden',
  color: '#ffffff',
  position: 'fixed',
  flexDirection: 'row',
  justifyContent: 'center',
  background: colors.blueMix,
  transition: 'height 175ms ease-in-out',

  '& a, & .item': {
    fontWeight: 700,
    textDecoration: 'none',
  },

  '& .wrapLinks': {
    width: '95%',
    textAlign: 'center',
  },

  '& .item': {
    width: '100%',
    display: 'block',
    padding: '8px 0',
    borderBottom: '1px solid #ffffff',
  },

  '& .label': {
    width: '100%',
  },

  '& .icon': {
    display: 'none',
  },

  [media.greaterThan(sizes.mobileBreak)]: {
    flexShrink: 0,
    position: 'inherit',
    zIndex: 4,
    background: colors.whiteBg,
    color: colors.blackFg,
    textShadow: 'none',
    display: 'inline-flex',
    width: sizes.navWidth,
    height: 'auto',

    '& .mob': {
      display: 'none !important',
    },

    '& a:hover, & a.active': {
      background: colors.grey,
    },

    '& .wrapLinks': {
      top: 60,
      left: 0,
      position: 'fixed',
      width: sizes.navWidth - 1,
      borderRight: `1px solid ${colors.grey}`,
    },

    '& .item': {
      width: '100%',
      display: 'flex',
      padding: '2px 0',
      flexDirection: 'row',
      alignItems: 'flex-end',
      borderBottom: 'none',

      '& .icon': {
        width: 45,
        height: 35,
        flexShrink: 0,
        ...flexRowCenter,
        justifyContent: 'center',
      },

      '& .label': {
        height: 30,
        flexGrow: 1,
        ...flexRowCenter,
      },
    },
  },
}

const collapseNav = () => {
  // update nav expanded state to collapsed
  const el = document.querySelector('#navExpanded')
  if (!el || !el.checked) return
  el.click()
}

const Nav = ({ users, numMsgs, numReported }) => {
  const { username, role } = users[users.curUser] || {}
  const iconStyle = { height: 30, width: 30 }

  return (
    <div className={'Nav ' + css(navStyle)}>
      <div className="wrapLinks">
        <p className="welcome item mob">Logged in as, {username}</p>
        {links.map(link => {
          let { href, icon, label, mobile } = link

          if (href === '/admin') {
            if (role !== 'admin') return null
            if (numMsgs + numReported > 0) {
              label = (
                <span>
                  {label}
                  <span className="adminNotifs">{numMsgs + numReported}</span>
                </span>
              )
            }
          }
          return (
            <ActiveLink
              key={href}
              {...{
                href,
                onClick: collapseNav,
                activeClassName: 'active',
                className: 'item' + (mobile ? ' mob' : ''),
              }}
            >
              <div className="icon">
                {icon ? <Icon icon={icon} style={iconStyle} /> : null}
              </div>
              <div className="label">{label}</div>
            </ActiveLink>
          )
        })}
        <div className="item mob">
          <div className="label" onClick={logout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(({ users }) => ({ users }))(Nav)
