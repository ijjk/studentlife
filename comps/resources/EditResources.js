import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { sizes, colors } from '../../style/theme'
import {
  setDialog,
  createResource,
  updateResource,
  removeResource,
} from '../../redux/actions'
import getError from '../../util/getError'
import ResourceField from './ResourceField'

const style = {
  padding: 10,

  '& .row': {
    margin: '15px auto 0',

    '& div': {
      textAlign: 'right',
      padding: '0 10px 0 0',

      '& svg': {
        cursor: 'pointer',
        marginLeft: 5,
      },
    },

    '& input': {
      padding: 5,
      border: 'none',
      background: 'none',
      width: 'calc(50% - 10px)',
      borderBottom: `1px solid ${colors.blackFg}`,
    },
  },

  '& .row, & .wrapBtn': {
    width: '100%',
    maxWidth: sizes.maxBlockWidth * 1.5,
  },

  '& .wrapBtn': {
    margin: 'auto',
    textAlign: 'right',
    padding: '10px 10px 0 0',
  },

  '& .addItem': {
    margin: '50px 0 20px',
  },
}

class EditResources extends Component {
  constructor(props) {
    super(props)
    let state = {
      new: {
        link: '',
        label: '',
      },
    }
    const { resources } = props
    resources.ids.forEach(
      id =>
        (state[id] = {
          label: resources[id].label,
          link: resources[id].link,
        })
    )
    this.state = state
    this.className = css(style)
  }

  static getDerivedStateFromProps({ resources }, state) {
    const toAdd = {}
    let hasNew = false
    resources.ids.forEach(id => {
      if (!state[id]) {
        hasNew = true
        toAdd[id] = { ...resources[id] }
      }
    })
    return hasNew ? toAdd : null
  }

  handleChange = e => {
    let { id } = e.target
    let tmp = id.split(':')
    id = tmp.pop()
    let field = tmp.pop()
    const val = e.target.value
    const changed = Boolean(
      id !== 'new' && val !== this.props.resources[id][field]
    )
    this.setState({
      [id]: {
        ...this.state[id],
        changed,
        [field]: val,
      },
    })
  }

  resetResource = e => {
    const { id } = e.currentTarget
    this.setState({
      [id]: {
        ...this.props.resources[id],
        changed: false,
      },
    })
  }

  addResource = () => {
    const { label, link } = this.state.new || {}
    if (!label || !link) return
    setDialog({
      message: 'Are you sure you want to add this resource?',
      button1Act: () => {
        createResource({ label, link }).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred adding the resource'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  delResource = e => {
    const { resources } = this.props
    const { id } = e.currentTarget
    setDialog({
      message: `Are you sure you want to delete the ${
        resources[id].label
      } resource?`,
      button1Act: () => {
        removeResource(id).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred deleting the resource'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  updateOne = toUpdate => {
    if (!toUpdate.length) return Promise.resolve()
    const _id = toUpdate.pop()
    const { link, label } = this.state[_id]
    return updateResource({ _id, label, link })
      .then(() =>
        this.setState({
          [_id]: {
            link,
            label,
            changed: false,
          },
        })
      )
      .then(() => this.updateOne(toUpdate))
      .catch(err => {
        setDialog({
          title: 'Error...',
          message: getError(err, 'An error occurred submitting the changes'),
          button1Txt: 'OK',
          button2Txt: null,
        })
      })
  }

  submitChanges = () => {
    const ids = Object.keys(this.state)
    const changed = ids.filter(id => {
      const { changed, link, label } = this.state[id]
      return changed && link.length && label.length && id !== 'new'
    })
    if (!changed.length) return
    const num = changed.length
    const s = num === 1 ? '' : 's'
    setDialog({
      message: `Are you sure you want to update ${num} resource${s}?`,
      button1Act: () => this.updateOne(changed),
    })
  }

  render() {
    const { newLabel, newLink } = this.state
    const { resources } = this.props
    const { ids } = resources

    return (
      <div className={this.className}>
        <div className="wrapItems">
          {ids.map(id => {
            const { label, link, changed } = this.state[id]
            return (
              <ResourceField
                {...{ id, changed, label, link }}
                key={id}
                delAct={this.delResource}
                onChange={this.handleChange}
                resetAct={this.resetResource}
              />
            )
          })}
          <div className="wrapBtn">
            <button onClick={this.submitChanges}>Submit changes</button>
          </div>
        </div>
        <div className="addItem">
          <ResourceField
            id="new"
            noIcons
            link={newLink}
            label={newLabel}
            onChange={this.handleChange}
          />
          <div className="wrapBtn">
            <button onClick={this.addResource}>Add resource</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({ resources }) => ({ resources }))(EditResources)
