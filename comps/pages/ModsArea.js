import React from 'react'
import Spinner from '../Spinner'
import Avatar from '../user/Avatar'
import Icon from '@fortawesome/react-fontawesome'

const ModsArea = ({
  mods,
  users,
  newMod,
  addMod,
  modError,
  handleMod,
  removeMod,
  modPending,
}) => (
  <div className="mods">
    <div className="wrap">
      <h5>Page moderators</h5>
      <p className="note">
        {
          "Note: moderators are allowed to edit the page's name, desc, and thumbnail and post on the page."
        }
      </p>
      <div className="items">
        {(!mods || !mods.length) && (
          <p className="none">No moderators have been added yet</p>
        )}
        {mods &&
          mods.map(({ _id, user }) => {
            const { avatar, firstName, lastName, username } = users[user] || {}
            return (
              <div key={_id}>
                <Avatar avatar={avatar} style={{ height: 30, width: 30 }} />
                <p>{`${firstName} ${lastName} - @${username}`}</p>
                <Icon
                  id={_id}
                  data-user={user}
                  icon="trash"
                  style={{ height: 18 }}
                  onClick={removeMod}
                />
              </div>
            )
          })}
      </div>
      <div className="addMod">
        <label htmlFor="modUser">New moderator: </label>
        <input
          type="text"
          id="modUser"
          value={newMod}
          onChange={handleMod}
          placeholder="New mod's username"
        />
        <button onClick={modPending ? null : addMod}>
          {modPending ? <Spinner size={18} alt /> : 'Submit'}
        </button>
        {modError && <p>{modError}</p>}
      </div>
    </div>
  </div>
)

export default ModsArea
