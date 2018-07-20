import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { loadResources } from '../redux/actions'
import Link from 'next/link'
import Layout from '../comps/Layout'
import Spinner from '../comps/Spinner'
import BubbleNav from '../comps/BubbleNav'
import withLoginReload from '../util/withLoginReload'
import EditResources from '../comps/resources/EditResources'

const style = {
  position: 'relative',
  paddingBottom: 20,

  '& .error': {
    textAlign: 'center',
    padding: '35px 10px',
  },

  '& .loading': {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    margin: 'auto',
    position: 'absolute',
  },

  '& iframe': {
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
  },

  '& .wrapEdit': {
    padding: 10,
    width: '100%',
    paddingBottom: 0,
    textAlign: 'right',
  },
}

class Resources extends Component {
  static async getInitialProps({ query }) {
    const props = {}
    if (query.id) {
      props.active = query.id
    } else if (typeof query.edit !== 'undefined') {
      props.editMode = true
    }
    await loadResources()
    return props
  }

  constructor(props) {
    super(props)
    this.className = css(style)
  }

  render() {
    const { active, editMode, resources, users } = this.props
    const { isAdmin } = users[users.curUser] || {}
    const { error, ids, pending } = resources
    const found = Boolean(resources[active])
    return (
      <Layout className={this.className} restrict>
        {editMode && isAdmin && <EditResources />}
        {editMode &&
          !isAdmin && (
            <p className="error">You do not have permission to access this</p>
          )}
        {active &&
          found && (
            <div>
              <Spinner size={36} className="loading" />
              <iframe src={resources[active].link} />
            </div>
          )}
        {active && !found && <p className="error">Resource not found</p>}
        {!active &&
          !editMode && (
            <div>
              {isAdmin && (
                <div className="wrapEdit">
                  <Link href="/resource?edit">
                    <button id="edit">Edit resources</button>
                  </Link>
                </div>
              )}
              {pending && <Spinner size={36} />}
              {error && !pending && <p className="error">{error}</p>}
              {!pending &&
                !ids.length && (
                  <p className="error">There are items here yet</p>
                )}
              <BubbleNav
                items={ids.map(id => ({
                  label: resources[id].label,
                  link: `/resource?id=${id}`,
                }))}
              />
            </div>
          )}
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ resources, users }) => ({ resources, users }))(Resources),
  ctx => ({ query: ctx.query })
)
