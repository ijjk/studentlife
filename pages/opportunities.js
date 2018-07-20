import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { sizes, flexRowCenter, colors, media } from '../style/theme'
import {
  loadOpps,
  setDialog,
  createOpp,
  updateOpp,
  removeOpp,
  createOppCat,
  updateOppCat,
  removeOppCat,
} from '../redux/actions'
import Layout from '../comps/Layout'
import Spinner from '../comps/Spinner'
import getError from '../util/getError'
import OppCat from '../comps/opps/OppCat'
import withLoginReload from '../util/withLoginReload'

const style = {
  padding: '25px 10px',
  textAlign: 'center',

  '& .loading': {
    margin: '10px auto',
  },

  '& input': {
    border: 'none',
    padding: '3px 6px',
    background: 'none',
    borderBottom: `1px solid ${colors.blackFg}`,
  },

  '& .cats': {
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
    maxWidth: sizes.maxBlockWidth * 2.25,
  },

  '& .cat': {
    margin: 25,
    textAlign: 'left',
    verticalAlign: 'top',
    display: 'inline-block',
    width: 'calc(50% - 50px)',
    maxWidth: sizes.maxBlockWidth,

    [media.lessThan(1100)]: {
      width: 'calc(100% - 50px)',
    },

    '& .title': {
      padding: '0 0 5px',
      ...flexRowCenter,

      '& h5': {
        flexShrink: 1,
        flexGrow: 1,
      },
      '& svg': {
        width: 18,
        height: 18,
        margin: '0 5px',
        cursor: 'pointer',
      },
    },

    '& .editCat': {
      ...flexRowCenter,
      flexWrap: 'wrap',

      '& button': {
        marginTop: 5,

        ':nth-child(2)': {
          margin: '5px 10px 0 auto',
        },
      },

      [media.lessThan(415)]: {
        '& input': {
          width: '100%',
        },
      },
    },

    '& ul': {
      marginLeft: 25,

      '& li': {
        padding: '8px 0 0',

        '& p, & svg': {
          verticalAlign: 'top',
        },

        '& p': {
          display: 'inline-block',
          width: 'calc(100% - 42px)',
        },
        '& svg': {
          marginRight: 5,
          cursor: 'pointer',
        },
        '& div': {
          display: 'flex',
          flexWrap: 'wrap',
        },
        '& input': {
          width: 'calc(50% - 2.5px)',
          ':nth-child(2)': {
            marginRight: 5,
          },
        },
        '& button': {
          margin: '5px 0',

          ':nth-child(5)': {
            margin: '5px 5px 5px auto',
          },
        },
      },
    },

    '& .addOpp': {
      marginTop: 15,
      flexWrap: 'wrap',
      ...flexRowCenter,

      '& input': {
        width: 'calc(50% - 2.5px)',
        ':nth-child(2)': {
          marginRight: 5,
        },
      },
      '& button': {
        marginLeft: 'auto',
        marginTop: 10,
      },
    },
  },

  '& .newCat': {
    ...flexRowCenter,
    flexWrap: 'wrap',
    display: 'inline-flex',
    padding: '10px 0 0 0',
    verticalAlign: 'bottom',

    '& label, & input, & button': {
      marginTop: 5,
    },

    '& label': {
      marginRight: 5,
    },
    '& input': {
      flexGrow: 1,
      flexShrink: 1,
      marginRight: 10,
    },
    '& button': {
      marginLeft: 'auto',
    },
  },
}

class Opportunities extends Component {
  static async getInitialProps() {
    await loadOpps()
  }

  state = {
    editingCats: {},
    editingOpps: {},
  }

  addCat = () => {
    const el = document.getElementById('addCat')
    const name = el.value.trim()
    if (!name.length) return
    el.value = ''
    createOppCat({ name }).catch(err => {
      setDialog({
        title: 'Error...',
        message: getError(err, 'An error occurred adding the category'),
        button1Txt: 'OK',
        button2Txt: null,
      })
    })
  }

  getId = e => (typeof e === 'string' ? e : e.currentTarget.closest('div').id)

  editCat = e => {
    const id = this.getId(e)
    this.setState({ editingCats: { ...this.state.editingCats, [id]: true } })
    setTimeout(() => {
      const el = document.getElementById('cat' + id)
      if (el) el.focus()
    }, 25)
  }

  cancelEditCat = e => {
    const id = this.getId(e)
    this.setState({ editingCats: { ...this.state.editingCats, [id]: false } })
  }

  submitEditCat = e => {
    const _id = this.getId(e)
    const nameEl = document.getElementById('cat' + _id)
    const name = nameEl.value.trim()
    const origName = this.props.opps[_id].name
    const done = () => this.cancelEditCat(_id)
    if (name === origName) return done()

    setDialog({
      message: `Are you sure you want to rename ${origName} to ${name}?`,
      button1Act: () => {
        updateOppCat({ _id, name })
          .then(() => done())
          .catch(err => {
            setDialog({
              title: 'Error...',
              message: getError(
                err,
                'An error occurred renaming this category'
              ),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  removeCat = e => {
    const id = this.getId(e)
    setDialog({
      message: `Are you sure you want to delete the ${
        this.props.opps[id].name
      } category and all it's opportunities?`,
      button1Act: () => {
        removeOppCat(id).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(err, 'An error occurred removing the category'),
          })
        })
      },
    })
  }

  addOpp = e => {
    const { id } = e.currentTarget
    const descEl = document.getElementById('desc' + id)
    const linkEl = document.getElementById('link' + id)
    const desc = descEl.value.trim()
    const link = linkEl.value.trim()
    if (!desc.length || !link.length) return
    descEl.value = ''
    linkEl.value = ''
    createOpp({ cat: id, desc: desc, link }).catch(err => {
      setDialog({
        title: 'Error...',
        message: getError(err, 'An error occurred adding the opportunity'),
        button1Txt: 'OK',
        button2Txt: null,
      })
    })
  }

  editOpp = e => {
    const { id } = e.currentTarget
    this.setState({ editingOpps: { ...this.state.editingOpps, [id]: true } })
  }

  cancelEditOpp = e => {
    const id = this.getId(e)
    this.setState({ editingOpps: { ...this.state.editingOpps, [id]: false } })
  }

  submitEditOpp = e => {
    const _id = this.getId(e)
    const cat = e.currentTarget.closest('div').getAttribute('data-cat')
    const done = () => this.cancelEditOpp(_id)
    const descEl = document.getElementById('editDesc' + _id)
    const linkEl = document.getElementById('editLink' + _id)
    const desc = descEl.value.trim()
    const link = linkEl.value.trim()
    if (!desc.length || !link.length) return
    const curOpp = this.props.opps[cat][_id]
    if (desc === curOpp.desc && link === curOpp.link) return done()

    setDialog({
      message: 'Are you sure you want to update this opportunity?',
      button1Act: () => {
        updateOpp({ _id, desc, link })
          .then(() => done())
          .catch(err => {
            setDialog({
              title: 'Error...',
              message: getError(
                err,
                'An error occurred updating the opportunity'
              ),
              button1Txt: 'OK',
              button2Txt: null,
            })
          })
      },
    })
  }

  removeOpp = e => {
    const { id } = e.currentTarget
    setDialog({
      message: `Are you sure you want to delete this opportunity?`,
      button1Act: () => {
        removeOpp(id).catch(err => {
          setDialog({
            title: 'Error...',
            message: getError(
              err,
              'An error occurred removing the opportunity'
            ),
            button1Txt: 'OK',
            button2Txt: null,
          })
        })
      },
    })
  }

  render() {
    const { editingCats, editingOpps } = this.state
    const { opps, users } = this.props
    const { error, ids, pending } = opps
    const { curUser } = users
    const { isAdmin } = users[curUser] || {}

    return (
      <Layout className={css(style)} restrict>
        {pending && <Spinner size={36} className="loading" />}
        {error && !pending && <p className="error">{error}</p>}
        {!ids.length &&
          !error &&
          !pending && <p className="error">There are no opportunities yet</p>}
        <div className="cats">
          {ids.map(catId => {
            const cat = opps[catId]
            return (
              <OppCat
                key={catId}
                {...{
                  ...cat,
                  catId,
                  isAdmin,
                  editingOpps,
                  addOpp: this.addOpp,
                  editCat: this.editCat,
                  editOpp: this.editOpp,
                  removeCat: this.removeCat,
                  removeOpp: this.removeOpp,
                  editingCat: editingCats[catId],
                  cancelEditCat: this.cancelEditCat,
                  cancelEditOpp: this.cancelEditOpp,
                  submitEditCat: this.submitEditCat,
                  submitEditOpp: this.submitEditOpp,
                }}
              />
            )
          })}
          <div className="cat newCat">
            {isAdmin && [
              <label htmlFor="addCat" key="l">
                Add category:
              </label>,
              <input
                type="text"
                id="addCat"
                placeholder="New category name"
                key="i"
              />,
              <button onClick={this.addCat} key="b">
                Submit
              </button>,
            ]}
          </div>
        </div>
      </Layout>
    )
  }
}

export default withLoginReload(
  connect(({ opps, users }) => ({ opps, users }))(Opportunities)
)
