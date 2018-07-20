import React from 'react'
import Icon from '@fortawesome/react-fontawesome'

const iconStyle = {
  width: 22,
  height: 22,
}
const extraIconStyle = {
  width: 30,
  height: 30,
}

const Field = ({
  type,
  icon,
  extraIcon,
  extraIconProps,
  id,
  name,
  placeholder,
  ...props
}) => {
  let className = 'field'
  if (icon) className += ' icon'
  if (extraIcon) className += ' extraIcon'
  if (type === 'textarea') className += ' textarea'

  return (
    <div className={className}>
      <label htmlFor={name} className="offscreen">
        {placeholder}
      </label>

      {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
        ...props,
        name,
        placeholder,
        id: id || name,
        type: type === 'textarea' ? null : type,
      })}

      {icon ? <Icon icon={icon} style={iconStyle} /> : null}

      {extraIcon ? (
        <Icon icon={extraIcon} style={extraIconStyle} {...extraIconProps} />
      ) : null}

      <div className="underline" />
    </div>
  )
}

export default Field
