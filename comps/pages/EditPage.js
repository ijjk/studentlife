import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  setDialog,
  createMod,
  removeMod,
  updatePage,
  removePage,
} from '../../redux/actions'
import Router from 'next/router'
import ModsArea from './ModsArea'
import PageThumb from './PageThumb'
import style from './editPageStyle'
import getError from '../../util/getError'
import FileDropBox from '../util/FileDropBox'
import Icon from '@fortawesome/react-fontawesome'

const Field = ({ label, name, type, ...props }) => (
  <div className="field">
    {label && <label htmlFor={name}>{label}</label>}
    {React.createElement(type === 'textarea' ? 'textarea' : 'input', {
      name,
      id: name,
      type: type !== 'textarea' ? type : null,
      ...props,
    })}
  </div>
)
const emptyPage = { name: '', desc: '', thumb: null }
const getPage = ({ curPage, pages }) =>
  curPage !== 'new' && pages[curPage] ? pages[curPage] : emptyPage

class EditPage extends Component {
  constructor(props) {
    super(props)
    let { name, desc, thumb } = getPage(props)
    this.state = {
      name,
      desc,
      thumb,
      newMod: '',
      file: null,
      changed: {},
      modError: null,
      modPending: false,
      previewData: null,
    }
    this.className = css(style)
  }

  handleFileChange = file => {
    const { changed } = this.state
    const state = { changed, file }
    if (!file) {
      delete state.changed.thumb
      state.previewData = null
    } else {
      state.changed.thumb = true
    }
    this.setState(state)
  }

  handleField = e => {
    const { changed } = this.state
    const { name, value } = e.target
    const page = getPage(this.props)

    if (value !== page[name]) {
      changed[name] = true
    } else {
      delete changed[name]
    }
    this.setState({ [name]: value, changed })
  }

  reset = () => {
    const { name, desc } = getPage(this.props)
    this.setState({
      name,
      desc,
      file: null,
      changed: {},
      previewData: null,
    })
  }

  submit = () => {
    const { curPage } = this.props
    const { changed, file, name } = this.state
    const isNew = curPage === 'new'
    if (isNew && (!name || !file)) return
    const toSubmit = {}
    const changedFields = Object.keys(changed)
    if (!changedFields.length) return
    changedFields.forEach(key => (toSubmit[key] = this.state[key]))

    if (changed.thumb) {
      toSubmit.thumb = file
      delete toSubmit.file
    }
    if (!isNew) toSubmit._id = curPage
    setDialog({
      message: `Are you sure you would like to ${
        isNew ? 'create' : 'update'
      } this page?`,
      button1Act: () => {
        updatePage(toSubmit).then(id => Router.push('/page?id=' + id))
      },
    })
  }

  previewThumb = previewData => {
    this.setState({ previewData })
  }

  handleMod = e => {
    this.setState({ newMod: e.target.value })
  }

  addMod = () => {
    let { newMod, modPending } = this.state
    if (modPending) return
    newMod = newMod.trim()
    if (!newMod) return
    setDialog({
      message: `Are you sure you want to make ${newMod} a moderator on this page?`,
      button1Act: () => {
        this.setState({ modPending: true, modError: null })
        createMod(newMod)
          .then(() => {
            this.setState({ modPending: false, newMod: '' })
          })
          .catch(err => {
            if (this.unmounted) return
            this.setState({
              modPending: false,
              modError: getError(err, 'An error occurred adding the mod'),
            })
          })
      },
    })
  }

  removeMod = e => {
    const el = e.currentTarget
    const { users } = this.props
    const id = el.id
    const user = el.getAttribute('data-user')
    const { username } = users[user]
    setDialog({
      message: `Are you sure you want to remove ${username} as a moderator?`,
      button1Act: () => {
        removeMod(id).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred removing the moderator'),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  delete = () => {
    const { curPage } = this.props
    setDialog({
      message:
        'Are you sure you want to delete this page? This will delete all posts too and is permanent.',
      button1Act: () => {
        removePage(curPage)
          .then(() => Router.push('/page'))
          .catch(err => {
            setDialog({
              title: 'Error...',
              message: getError(err, 'An error occurred removing the page'),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  static getDerivedStateFromProps({ curPage, page, pages }, state) {
    if (!page.error && !page.pending && state.pending) {
      const { name, desc } = pages[curPage] || { name: '', desc: '' }
      return {
        name,
        desc,
        changed: {},
        pending: page.pending,
      }
    } else if (page.pending !== state.pending) {
      return { pending: page.pending }
    }
    return null
  }

  componentWillUnmount = () => (this.unmounted = true)

  render() {
    const {
      desc,
      name,
      newMod,
      changed,
      modError,
      modPending,
      previewData,
    } = this.state

    const { canEdit, curPage, page, pages, users } = this.props
    const { isAdmin } = users[users.curUser] || {}
    const { error, pending, progress } = page
    const { mods, modsOnly, thumb, ...pageData } = pages[curPage] || {}
    const isNew = curPage === 'new'
    const numChanged = Object.keys(changed).length

    if (curPage !== pages.curPage && !isNew) return null
    if (!canEdit && !isNew) {
      return (
        <div className={this.className}>
          <p className="denied">You are not allowed to edit this page</p>
        </div>
      )
    }
    let thumbPrev

    if (previewData) {
      thumbPrev = <PageThumb {...{ src: previewData }} />
    } else {
      thumbPrev = isNew ? (
        <Icon icon="file" style={{ height: 86, width: 96, marginRight: 25 }} />
      ) : (
        <PageThumb {...{ _id: pages.curPage, thumb }} />
      )
    }

    return (
      <div className={this.className}>
        {isAdmin &&
          !pageData.default &&
          !isNew && (
            <div className="wrapDel">
              <button id="delete" onClick={this.delete}>
                Delete page
              </button>
            </div>
          )}
        <div className="fields">
          {thumbPrev}
          <FileDropBox
            style={{ margin: '10px 0' }}
            onFileChange={this.handleFileChange}
            checkFileParams={{ imageOnly: true, previewCb: this.previewThumb }}
            message="Drag and drop picture or click below to select page thumbnail"
          />
          <Field
            name="name"
            value={name}
            label="Page name:"
            onChange={this.handleField}
            placeholder="A name for the page"
          />
          <Field
            name="desc"
            value={desc}
            type="textarea"
            label="Page description:"
            onChange={this.handleField}
            placeholder="A description of the page"
          />
          {Boolean(
            (isNew && changed.thumb && changed.name) || (!isNew && numChanged)
          ) && (
            <div className="field btns">
              <button onClick={this.reset} className="btn-alt">
                Reset
              </button>
              <button onClick={pending ? null : this.submit}>
                {pending ? `${progress}%` : 'Submit'}
              </button>
            </div>
          )}
          {error && <p className="error">{error}</p>}
        </div>
        {!isNew &&
          modsOnly &&
          isAdmin && (
            <ModsArea
              {...{
                mods,
                users,
                newMod,
                modError,
                modPending,
                addMod: this.addMod,
                handleMod: this.handleMod,
                removeMod: this.removeMod,
              }}
            />
          )}
      </div>
    )
  }
}

export default connect(({ page, pages, users }) => ({ page, pages, users }))(
  EditPage
)
