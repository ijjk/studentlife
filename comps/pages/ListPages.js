import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { uploadsUrl } from '../../util/config'
import { growIn } from '../../style/keyframes'
import { listPages } from '../../redux/actions'
import { shadows, flexRowCenter, media } from '../../style/theme'
import Link from 'next/link'
import Spinner from '../Spinner'

const style = {
  padding: 10,

  '& .wrapNew': {
    paddingBottom: 10,
    textAlign: 'right',
  },

  '& .pages': {
    '& .error, & .pending': {
      marginTop: 25,
      textAlign: 'center',
    },
    '& .items': {
      padding: '25px 10px',
      ...flexRowCenter,
      flexWrap: 'wrap',

      '& a': {
        textDecoration: 'none',
      },

      '& div': {
        margin: 20,
        width: 140,
        cursor: 'pointer',
        opacity: 0,
        animation: `${growIn} 150ms ease-in-out forwards`,

        ':hover': {
          '& img': {
            boxShadow: '3px 6px 9px rgba(0, 0, 0, 0.3)',
          },
        },

        '& img': {
          width: 140,
          height: 140,
          ...shadows.box,
          borderRadius: '100%',
          background: '#ffffff',
          transition: 'box-shadow 150ms ease-in-out',
        },

        '& .name': {
          paddingTop: 5,
          textAlign: 'center',
          wordBreak: 'break-word',
        },

        [media.lessThan(400)]: {
          width: 115,

          '& img': {
            width: 115,
            height: 115,
          },
        },

        [media.lessThan(350)]: {
          width: 100,

          '& img': {
            width: 100,
            height: 100,
          },
        },
      },
    }, // .items
    '& .moreBtn': {
      margin: '0 auto 15px',
      display: 'block',
    },
  },
}

const updateSort = e => {
  const sort = e.target.value
  listPages({ sort, initial: true })
}

class ListPages extends Component {
  state = {
    numPrev: 0,
    numAddded: 0,
  }

  static getDerivedStateFromProps(props, state) {
    const { numPrev } = state
    const numCur = props.pages.toList.length

    if (numCur !== numPrev) {
      return {
        numPrev: numCur,
        numAdded: numCur > numPrev ? numCur - numPrev : 0,
      }
    }
    return null
  }

  render() {
    const { numAdded } = this.state
    const { pages, users } = this.props
    const { error, hasMore, pending, sort, toList } = pages
    const idxOffset = toList.length - numAdded
    const curUser = users[users.curUser] || {}
    const { restricts } = curUser

    return (
      <div className={css(style)}>
        <div className="wrapNew">
          {restricts && !restricts.making_pages ? (
            <Link href="/new-page">
              <a id="create">
                <button>Create page</button>
              </a>
            </Link>
          ) : (
            <p>Making pages is disabled for your account</p>
          )}
        </div>
        <div>
          <label htmlFor="sort">Sort pages: </label>
          <select id="sort" value={sort} onChange={updateSort}>
            <option value="createdAt:-1">{'Created new -> old'}</option>
            <option value="createdAt:1">{'Created old -> new'}</option>
            <option value="name:1">{'Name A -> Z'}</option>
            <option value="name:-1">{'Name Z -> A'}</option>
          </select>
        </div>
        <div className="pages">
          <div className="items">
            {toList.map((_id, idx) => {
              const { name, thumb } = pages[_id] || {}
              if (!thumb) return null
              if (numAdded) {
                idx = idx > idxOffset ? idx - idxOffset : 0
              }
              return (
                <Link href={`/page?id=${_id}`} key={_id}>
                  <a>
                    <div style={{ animationDelay: idx * 50 + 'ms' }}>
                      <img src={uploadsUrl + thumb} alt="page thumb" />
                      <h6 className="name">{name}</h6>
                    </div>
                  </a>
                </Link>
              )
            })}
          </div>
          {!pending &&
            !error &&
            !toList.length && <p className="error">There are no pages yet</p>}
          {pending && <Spinner size={36} className="pending" />}
          {error && !pending && <p className="error">{error}</p>}
          {hasMore &&
            !pending && (
              <button className="moreBtn" onClick={() => listPages({})}>
                Load more
              </button>
            )}
        </div>
      </div>
    )
  }
}

export default connect(({ pages, users }) => ({ pages, users }))(ListPages)
