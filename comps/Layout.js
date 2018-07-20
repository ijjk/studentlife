import React from 'react'
import '../style/global'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { colors, shadows, flexRowCenter } from '../style/theme'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import LoginForm from './forms/LoginForm'
import Shortcuts from './Shortcuts'
import Dialog from './util/Dialog'

const Layout = ({
  noNav,
  users,
  children,
  gradient,
  noFooter,
  noHeader,
  restrict,
  className,
  basicHeader,
}) => {
  const showRestrict = Boolean(restrict && !users.curUser)
  const noGradient = {
    boxShadow: 'none !important',
    background: 'transparent !important',
  }
  let pgStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
  let childStyle = css({
    flexGrow: 1,
    display: 'flex',
    ...(!showRestrict ? {} : flexRowCenter),
  })
  let headerStyle = {
    top: 0,
    left: 0,
    zIndex: 5,
    height: 55,
    position: 'fixed',
  }
  let footerStyle = {
    minHeight: 55,
  }

  if (gradient || showRestrict) {
    pgStyle = css({
      ...pgStyle,
      ...shadows.text,
      color: '#ffffff',
      background: colors.blueGradient,
    })
    headerStyle = css({
      ...headerStyle,
      ...noGradient,
      position: 'relative',
    })
    footerStyle = css({
      ...footerStyle,
      ...noGradient,
    })
  } else {
    pgStyle = css({
      ...pgStyle,
      paddingTop: 55,
    })
    headerStyle = css(headerStyle)
    footerStyle = css(footerStyle)
  }
  return (
    <div className={'pg ' + pgStyle}>
      <Shortcuts />
      <Dialog />
      <input type="checkbox" style={{ display: 'none' }} id="navExpanded" />
      {!noHeader && <Header className={headerStyle} {...{ basicHeader }} />}
      <div className={childStyle}>
        {showRestrict ? (
          <div style={{ width: '100%', textAlign: 'center' }}>
            <div>
              <h5>
                This page requires authentication.<br />
                Please login to continue
              </h5>
              <LoginForm maxWidth={350} />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              flexGrow: 1,
            }}
          >
            {!noNav && <Nav />}
            <div className={className} style={{ flexGrow: 1 }}>
              {children}
            </div>
          </div>
        )}
      </div>
      {!noFooter && <Footer className={footerStyle} />}
    </div>
  )
}

export default connect(({ users }) => ({ users }))(Layout)
