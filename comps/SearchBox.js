import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { doSearch } from '../redux/actions'
import { colors, shadows, media, sizes, flexRowCenter } from '../style/theme'
import Router from 'next/router'
import Avatar from './user/Avatar'
import PageThumb from './pages/PageThumb'
import Icon from '@fortawesome/react-fontawesome'

const style = {
  height: 30,
  flexGrow: 1,
  paddingLeft: 15,
  ...flexRowCenter,
  marginRight: 'auto',
  position: 'relative',
  borderLeft: '1px solid #ffffff',

  '& .searchIcon': {
    zIndex: 1,
    marginRight: -24,
    pointerEvents: 'none',
  },

  '& input': {
    zIndex: 0,
    outline: 0,
    width: '100%',
    minWidth: 275,
    maxWidth: 360,
    border: 'none',
    fontSize: 17,
    ...shadows.text,
    color: '#ffffff',
    background: 'none',
    padding: '5px 3px 5px 32px',
    borderBottom: '1px solid transparent',
    transition: 'border 250ms ease-in-out',

    '::placeholder': {
      opacity: 1,
      ...shadows.text,
      color: '#ffffff',
    },

    ':focus': {
      borderBottom: '1px solid #ffffff',
    },
  }, // input

  '& .results': {
    position: 'absolute',
    top: 35,
    left: 11,
    width: '100%',
    minWidth: 275,
    maxWidth: 395,
    borderRadius: 2,
    background: '#ffffff',
    color: colors.blackFg,
    textShadow: 'none',
    ...shadows.box,

    '& .none': {
      padding: 3,
      textAlign: 'center',
    },

    '& a': {
      display: 'block',
      padding: '2px 0',
      textDecoration: 'none',
      borderBottom: `1px solid ${colors.grey}`,

      ':hover': {
        background: colors.grey,
      },

      '& div': {
        ...flexRowCenter,
        alignItems: 'flex-start',
      },

      '& .thumb': {
        width: 40,
        height: 40,
        boxShadow: 'none',
        borderRadius: 40,
      },

      '& p': {
        padding: '2px 2px 2px 5px',
        fontWeight: 700,
      },
    }, // a
  }, // .results

  [media.lessThan(sizes.mobileBreak)]: {
    display: 'none',
  },
}

class Search extends Component {
  clearSearch = () => {
    const el = document.getElementById('Search')
    if (el) el.value = ''
    doSearch('')
  }

  search = e => doSearch(e.target.value)

  searchKey = e => {
    // clear on escape key
    if ((e.which || e.keyCode) === 27) {
      this.clearSearch()
    }
  }

  handleClick = e => {
    e.preventDefault()
    Router.push(e.currentTarget.href)
    this.clearSearch()
  }

  render() {
    const { search } = this.props
    return (
      <div className={css(style) + ' .search'}>
        <Icon icon="search" style={{ height: 20 }} className="searchIcon" />
        <input
          type="text"
          id="Search"
          maxLength="48"
          onChange={this.search}
          onKeyDown={this.searchKey}
          defaultValue={search.searchQ}
          placeholder="Search users and pages..."
        />
        <div className="results">
          {search.results.map(result => {
            const {
              type,
              _id,
              thumb,
              name,
              avatar,
              firstName,
              lastName,
              username,
            } = result
            const isPage = type === 'page'
            const href = (isPage ? '/page' : '/user') + '?id=' + _id
            return (
              <a href={href} key={type + _id} onClick={this.handleClick}>
                {isPage ? (
                  <div>
                    <PageThumb
                      {...{ thumb }}
                      className="thumb"
                      style={{ width: null }}
                    />
                    <p>{name}</p>
                  </div>
                ) : (
                  <div>
                    <Avatar className="thumb" {...{ avatar }} />
                    <p>{`${firstName} ${lastName} - @${username}`}</p>
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(({ search }) => ({ search }))(Search)
