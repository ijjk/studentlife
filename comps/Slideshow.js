import React, { Component } from 'react'
import Icon from '@fortawesome/react-fontawesome'
import { css } from 'glamor'
import { noTapHighlight, flexRowCenter } from '../style/theme'
import {
  fadeIn,
  fadeOut,
  progClipRotate,
  progRotateRight,
  progShowLeft,
} from '../style/keyframes'

const fadeLen = 350 // in milliseconds
const slideLen = 3250 // in milliseconds
const toggleWidth = 35 // in px

const style = css({
  ...flexRowCenter,
  margin: 'auto',
  maxWidth: 500,
  userSelect: 'none',
  position: 'relative',

  '& .wrapSlide': {
    ...flexRowCenter,
    width: '100%',

    '& .adv, & .prev': {
      width: toggleWidth,
      textAlign: 'center',

      '& svg': {
        ...noTapHighlight,
        cursor: 'pointer',
        padding: 3,

        ':hover': {
          opacity: 0.8,
        },
        ':active': {
          opacity: 0.6,
        },
      },
    }, // .toggle

    '& .slide': {
      width: '100%',
    },

    '& .slide .wrap': {
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      animation: `${fadeIn} ${fadeLen}ms ease-in-out forwards`,

      '&.doFade': {
        animation: `${fadeOut} ${fadeLen}ms ease-in-out forwards`,
      },

      '& img': {
        maxWidth: '95%',
        boxShadow: '3px 3px 9px rgba(0, 0, 0, 0.35)',
      },

      '& div': {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        minHeight: 20,
        padding: 6,
        color: '#ffffff',
        textAlign: 'left',
        borderRadius: 2,
        background: 'rgba(0, 0, 0, 0.7)',
        boxShadow: '1px 3px 9px rgba(0, 0, 0, 0.35)',
      },
    }, // .slide .wrap
  }, // .wrapSlide

  '& .wrapProg': {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '4px 0 0',

    '& .dots': {
      display: 'inline-flex',
      margin: '6px auto',

      '& div': {
        width: 36,
        height: 6,
        margin: '0 3px',
        borderRadius: 3,
        background: '#ffffff',
        opacity: 0.65,
        cursor: 'pointer',
        transition: `opacity ${fadeLen}ms ease-in-out`,
        boxShadow: '2px 3px 6px rgba(0, 0, 0, 0.25)',

        ':hover': {
          opacity: 0.8,
        },

        '&.active': {
          opacity: 1,
        },
      },
    }, // .dots

    '& .progress': {
      position: 'absolute',
      top: 2,
      right: toggleWidth + 5,
      height: 12,
      width: 12,
      borderRadius: '50%',
      opacity: 1,

      '& .clip': {
        width: '50%',
        height: '100%',
        position: 'absolute',
        right: 0,
        overflow: 'hidden',
        transformOrigin: 'left center',
      },

      '& .half': {
        height: '100%',
        position: 'absolute',
        right: 0,
        border: 'solid 2px transparent',
        borderTopColor: '#ffffff',
        borderLeftColor: '#ffffff',
        borderRadius: '50%',
      },

      '& .right': {
        width: '200%',
        transform: 'rotate(-45deg)',
      },

      '& .left': {
        width: '100%',
        transform: 'rotate(135deg)',
        opacity: 0,
      },

      '&.active': {
        '& .clip': {
          transform: 'rotate(180deg)',
          animation: `${progClipRotate} ${slideLen}ms 1`,
        },
        '& .right': {
          transform: 'rotate(135deg)',
          animation: `${progRotateRight} ${slideLen / 2}ms linear 2`,
        },
        '& .left': {
          opacity: 1,
          animation: `${progShowLeft} ${slideLen}ms 1`,
        },
      }, // .active
    }, // .progress
  }, // .wrapProg
})

class Slideshow extends Component {
  state = {
    active: 0,
    doFade: false,
    progClass: null,
  }

  swapSlide = nextIdx => {
    clearTimeout(this.slideTime)
    this.setState({ doFade: true, progClass: '' })
    this.slideTime = setTimeout(() => {
      this.setState({ active: nextIdx })
      this.slideTime = setTimeout(() => {
        this.setState({
          doFade: false,
          progClass: 'active',
        })
        this.startNextTime()
      }, 50)
    }, fadeLen)
  }

  toggle = e => {
    let adv = e

    if (typeof e !== 'boolean') {
      const el = e.currentTarget
      adv = el.parentElement.classList.contains('adv')
    }
    const { active } = this.state
    const { slides } = this.props
    let nextIdx

    if (adv) {
      nextIdx = active < slides.length - 1 ? active + 1 : 0
    } else {
      nextIdx = active > 0 ? active - 1 : slides.length - 1
    }
    this.swapSlide(nextIdx)
  }

  dotClick = e => {
    const el = e.target
    const { active } = this.state
    const nextIdx = parseInt(el.getAttribute('id'), 10)
    if (active === nextIdx) return
    this.swapSlide(nextIdx)
  }

  startNextTime = () => {
    clearTimeout(this.nextSlideTime)
    this.nextSlideTime = setTimeout(() => {
      this.toggle(true)
    }, slideLen)
  }

  componentDidMount() {
    this.setState({ progClass: 'active' })
    this.startNextTime()
  }

  componentWillUnmount() {
    clearTimeout(this.slideTime)
    clearTimeout(this.nextSlideTime)
  }

  render() {
    const { active, doFade, progClass } = this.state
    const { slides, maxWidth, height } = this.props
    const toggleProps = {
      preserveAspectRatio: 'none',
      onClick: this.toggle,
      style: {
        width: 25,
        height: 90,
      },
    }

    return (
      <div className={style} style={{ maxWidth, height }}>
        <div className="wrapSlide">
          <div className="prev">
            <Icon icon="chevron-left" {...toggleProps} />
          </div>

          <div className="slide">
            <div className={'wrap' + (doFade ? ' doFade' : '')}>
              <img
                src={slides[active].src}
                alt={slides[active].alt}
                style={{ maxHeight: height - 50 }}
              />

              {slides[active].alt && slides[active].alt.length > 0 ? (
                <div>{slides[active].alt}</div>
              ) : null}
            </div>
          </div>

          <div className="adv">
            <Icon icon="chevron-right" {...toggleProps} />
          </div>
        </div>

        <div className="wrapProg">
          <div className="dots">
            {slides.map((_, i) => {
              return (
                <div
                  key={i}
                  id={i}
                  onClick={this.dotClick}
                  className={active === i && !doFade ? 'active' : null}
                />
              )
            })}
          </div>

          <div className={'progress ' + progClass}>
            <div className="clip">
              <div className="half right" />
            </div>
            <div className="half left" />
          </div>
        </div>
      </div>
    )
  }
}

export default Slideshow
