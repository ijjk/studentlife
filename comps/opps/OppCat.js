import React from 'react'
import Opp from './Opp'
import Icon from '@fortawesome/react-fontawesome'

const OppCat = ({
  ids,
  name,
  catId,
  addOpp,
  isAdmin,
  editCat,
  editOpp,
  removeCat,
  removeOpp,
  editingCat,
  editingOpps,
  cancelEditCat,
  cancelEditOpp,
  submitEditCat,
  submitEditOpp,
  ...cat
}) => (
  <div className="cat">
    <div>
      {!editingCat ? (
        <div className="title" id={catId}>
          <h5>{name}</h5>
          {isAdmin && [
            <Icon key="e" onClick={editCat} icon="pencil-alt" />,
            <Icon icon="trash" onClick={removeCat} key="d" />,
          ]}
        </div>
      ) : (
        <div className="editCat" id={catId}>
          <input type="text" defaultValue={name} id={`cat${catId}`} />
          <button onClick={submitEditCat}>Update</button>
          <button onClick={cancelEditCat} className="btn-alt">
            Cancel
          </button>
        </div>
      )}
    </div>
    <ul>
      {ids.map(oppId => {
        const { desc, link } = cat[oppId]
        const editingOpp = editingOpps[oppId]
        return (
          <Opp
            key={oppId}
            {...{
              desc,
              link,
              catId,
              oppId,
              isAdmin,
              editOpp,
              removeOpp,
              editingOpp,
              submitEditOpp,
              cancelEditOpp,
            }}
          />
        )
      })}
    </ul>
    {isAdmin && (
      <div className="addOpp">
        <label htmlFor={`desc${catId}`} className="offscreen">
          Opportunity description
        </label>
        <input type="text" id={`desc${catId}`} placeholder="Opportunity desc" />
        <label htmlFor={`link${catId}`} className="offscreen">
          Opportunity link
        </label>
        <input type="url" id={`link${catId}`} placeholder="Opportunity link" />
        <button id={catId} onClick={addOpp}>
          Add
        </button>
      </div>
    )}
  </div>
)

export default OppCat
