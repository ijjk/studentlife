import React from 'react'
import { withRouter } from 'next/router'

const ActiveLink = ({
  children,
  router,
  onClick,
  activeStyle,
  className,
  activeClassName,
  ...props
}) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(props.href)
    if (typeof onClick === 'function') onClick(e)
  }
  const active = Boolean(router.pathname === props.href)
  className = className || ''

  if (activeClassName && active) {
    className += ` ${activeClassName}`
  }
  return (
    <a
      {...{
        ...props,
        className,
        onClick: handleClick,
        style: active ? activeStyle : null,
      }}
    >
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
