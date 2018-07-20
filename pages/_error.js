import React, { Component } from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'
import Link from 'next/link'
import Icon from '@fortawesome/react-fontawesome'
import Layout from '../comps/Layout'
import { shadows, flexColCenter, colors } from '../style/theme'
import { chewMoveAnim, chewTopAnim, chewBotAnim } from '../style/keyframes'

const dotSize = 15
const eatAnimSize = 35
const dotWrapBottom = 20

const style = {
  ...shadows.text,
  height: '100%',
  overflow: 'hidden',
  position: 'relative',

  '& .info': {
    fontSize: 20,
    ...flexColCenter,
    justifyContent: 'center',
    height: `calc(100% - ${eatAnimSize}px)`,

    '& p': {
      padding: '2px 0',

      ':nth-child(1)': {
        fontSize: 30,
      },
    },

    '& button': {
      fontSize: 18,
      display: 'block',
      padding: '3px 20px',
      margin: '10px auto',
    },
  }, // .info

  '& .dotsWrap': {
    width: '90%',
    height: dotSize * 1.5,
    display: 'flex',
    justifyContent: 'center',
    margin: `0 auto ${dotWrapBottom}px`,

    '& .dot': {
      margin: '0 auto',
      padding: `0 ${dotSize / 2}`,
    },
  },

  '& .eatAnim': {
    position: 'absolute',
    width: eatAnimSize,
    height: eatAnimSize,
    willChange: 'left',
    left: -5,
    bottom: dotWrapBottom - dotSize / 2,
    transform: 'rotate(-10deg)',

    '& .half': {
      width: eatAnimSize,
      height: eatAnimSize / 2,
      textAlign: 'center',
      overflow: 'hidden',
      willChange: 'transform',

      '& div': {
        background: colors.yellow,
        height: eatAnimSize,
        width: eatAnimSize,
        borderRadius: '100%',
      },

      ':nth-child(1)': {
        position: 'relative',
        transform: 'rotate(-20deg)',
        animation: `${chewTopAnim} 600ms ease-in-out infinite`,

        '& i': {
          position: 'absolute',
          top: eatAnimSize * 0.2,
          left: eatAnimSize * 0.65,
          height: eatAnimSize / 9,
          width: eatAnimSize / 9,
          borderRadius: '100%',
          background: '#000000',
        },
      }, // nth-child(1)

      ':nth-child(2)': {
        transform: 'rotate(200deg)',
        animation: `${chewBotAnim} 600ms ease-in-out infinite`,
      },
    },
  }, // .eatAnim
}

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  state = {
    dots: [],
    eatSpeed: 0, // this is overriden
  }

  dotSize = 20
  eatSpeedFactor = 0.35 // seconds spent on each dot
  checkEatSpeed = this.eatSpeedFactor * 100

  checkDots = () => {
    const { dotSize } = this
    this.numDots = Math.floor(window.innerWidth / (dotSize * 2))
    let dots = []

    for (let i = 0; i < this.numDots; i++) {
      dots.push(
        <i className="dot" key={i}>
          <Icon icon="file" style={{ height: dotSize, width: dotSize }} />
        </i>
      )
    }
    this.setState({
      dots,
      eatSpeed: this.numDots * this.eatSpeedFactor,
    })

    this.dots = this.dotsEl.getElementsByClassName('dot')
  }

  doEat = () => {
    if (this.dots.length === 0) return
    const eatLeft = this.eatEl.offsetLeft + 5

    for (let i = 0; i < this.dots.length; i++) {
      const el = this.dots[i]
      if (el.offsetLeft <= eatLeft) el.style.opacity = 0
      else el.style.opacity = 1
    }
    this.eatAnim = window.requestAnimationFrame(this.doEat)
  }

  componentDidMount() {
    this.checkDots()
    this.eatAnim = window.requestAnimationFrame(this.doEat)
    window.addEventListener('resize', this.checkDots)
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.eatAnim)
    window.removeEventListener('resize', this.checkDots)
  }

  render() {
    const { dots, eatSpeed } = this.state
    const { users, statusCode } = this.props
    const eatAnimStyle = {
      animation: `${chewMoveAnim(eatAnimSize)} ${eatSpeed}s linear infinite`,
    }
    return (
      <Layout className={css(style)} gradient noFooter noHeader noNav>
        <div className="info">
          {statusCode === 404 ? <p>Page Not Found</p> : null}
          <p>Error: {statusCode}</p>
          <Link href={users.curUser ? '/home' : '/'}>
            <button className="btn-alt">Go Home</button>
          </Link>
        </div>

        <div className="dotsWrap" ref={el => (this.dotsEl = el)}>
          {dots}
        </div>

        <div
          className="eatAnim"
          style={eatAnimStyle}
          ref={el => (this.eatEl = el)}
        >
          <div className="half">
            <div>
              {' '}
              <i />{' '}
            </div>
          </div>
          <div className="half">
            <div />
          </div>
        </div>
      </Layout>
    )
  }
}

export default connect(({ users }) => ({ users }))(Error)
