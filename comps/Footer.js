import React from 'react'
import { css } from 'glamor'
import { brand, links } from '../util/config'
import Icon from '@fortawesome/react-fontawesome'

const style = css({
  padding: '20px 10px 16px',
  textAlign: 'center',
  color: '#ffffff',
  background: '#212121',

  '& p': {
    lineHeight: 1,
    ':nth-child(1)': {
      fontSize: 22,
    },
  },

  '& .links': {
    padding: '10px 0',

    '& a': {
      transition: 'opacity 175ms ease-in-out',
      margin: '0 7px',

      ':hover': {
        opacity: 0.75,
      },

      '& svg': {
        color: '#ffffff',
      },
    },
  },
})

const iconStyle = {
  height: 32,
  width: 32,
}

const icons = {
  facebook: ['fab', 'facebook-square'],
  other: 'globe',
  twitter: ['fab', 'twitter-square'],
  instagram: ['fab', 'instagram'],
  pinterest: ['fab', 'pinterest-square'],
  youtube: ['fab', 'youtube'],
}

const Footer = ({ className }) => (
  <footer className={`${style} ${className || ''}`}>
    <p>STAY CONNECTED WITH {brand}</p>

    <div className="links">
      {Object.keys(icons).map(key => {
        if (!links[key] || links[key].length === 0) return null

        return (
          <a
            href={links[key]}
            rel="noopener noreferrer"
            target="_blank"
            key={key}
          >
            <span className="offscreen">{brand + ' ' + key} link</span>
            <Icon icon={icons[key]} style={iconStyle} />
          </a>
        )
      })}
    </div>

    <p>Original Programming and Design by: JJ Kasper & Keaton Henry</p>
  </footer>
)

export default Footer
