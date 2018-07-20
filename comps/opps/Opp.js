import React from 'react'
import ExtLink from '../util/ExtLink'
import Icon from '@fortawesome/react-fontawesome'

const Opp = ({
  desc,
  link,
  catId,
  oppId,
  editOpp,
  isAdmin,
  removeOpp,
  editingOpp,
  cancelEditOpp,
  submitEditOpp,
}) => {
  return !editingOpp ? (
    <li>
      <p>
        <ExtLink href={link}>{desc}</ExtLink>
      </p>
      {isAdmin && [
        <Icon key="e" id={oppId} icon="pencil-alt" onClick={editOpp} />,
        <Icon key="d" id={oppId} icon="trash" onClick={removeOpp} />,
      ]}
    </li>
  ) : (
    <li>
      <div id={oppId} data-cat={catId}>
        <label className="offscreen" htmlFor={`editDesc${catId}`}>
          Opportunity description
        </label>
        <input type="text" defaultValue={desc} id={`editDesc${oppId}`} />
        <label htmlFor={`editLink${catId}`} className="offscreen">
          Opportunity link
        </label>
        <input type="url" defaultValue={link} id={`editLink${oppId}`} />
        <button onClick={submitEditOpp}>Update</button>
        <button onClick={cancelEditOpp} className="btn-alt">
          Cancel
        </button>
      </div>
    </li>
  )
}

export default Opp
