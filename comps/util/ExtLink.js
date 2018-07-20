import React from 'react'

const ExtLink = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export default ExtLink
