import React from 'react'
import Icon from '@fortawesome/react-fontawesome'

const ResourceField = ({
  id,
  label,
  link,
  noIcons,
  changed,
  delAct,
  resetAct,
  ...props
}) => (
  <div className="row">
    {!noIcons && (
      <div>
        {changed && (
          <span title="reset changes">
            <Icon
              icon="undo"
              {...{ id }}
              onClick={resetAct}
              style={{ height: 14 }}
            />
          </span>
        )}
        <Icon
          icon="trash"
          style={{ height: 14 }}
          {...{ id }}
          onClick={delAct}
        />
      </div>
    )}
    <input
      {...props}
      type="text"
      value={label}
      maxLength="24"
      id={`label:${id}`}
      style={{ marginRight: 10 }}
      placeholder="Resource label"
    />
    <input
      {...props}
      type="url"
      value={link}
      maxLength="1024"
      id={`link:${id}`}
      placeholder="Resource link"
    />
  </div>
)

export default ResourceField
