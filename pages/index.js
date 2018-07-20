import React, { Component } from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import { flexRowCenter, media } from '../style/theme'
import Layout from '../comps/Layout'
import Slideshow from '../comps/Slideshow'
import Toggle from '../comps/forms/Toggle'
import SetupForm from '../comps/forms/SetupForm'
import LoginForm from '../comps/forms/LoginForm'
import ContactForm from '../comps/forms/ContactForm'

const slidesPath = '/slideshow/'
const slides = [
  {
    src: '0.jpg',
    alt: 'KC Chalk Walk',
  },
  {
    src: '1.jpg',
    alt: 'Nerman Museum of Art Field Trip',
  },
  {
    src: '2.jpg',
    alt: 'Senior Graduation 2017',
  },
  {
    src: '3.jpg',
    alt: 'LVS Staff 2016-17',
  },
].map(({ alt, src }) => ({ alt, src: slidesPath + src }))

const indexStyle = css({
  ...flexRowCenter,

  '& .wrapSlideshow, & .wrapForm': {
    width: '50%',
    padding: '20px 0',
  },

  [media.lessThan(850)]: {
    '& .wrapSlideshow': {
      display: 'none',
    },
    '& .wrapForm': {
      width: '100%',
    },
  },
})

class IndexPage extends Component {
  state = {
    curForm: 0,
    curOption: 0,
    initial: true,
    showSlideshow: true,
    formShouldHide: false,
  }

  checkSlideshow = () => {
    const { showSlideshow } = this.state

    if (window.innerWidth <= 850 && showSlideshow) {
      this.setState({ showSlideshow: false })
    } else if (window.innerWidth > 850 && !showSlideshow) {
      this.setState({ showSlideshow: true })
    }
  }

  handleToggle = () => {
    const curOption = this.state.curOption ? 0 : 1
    this.setState({ formShouldHide: true, curOption, initial: false })
    this.timeout = setTimeout(() => {
      this.setState({
        formShouldHide: false,
        curForm: curOption,
      })
    }, 325)
  }

  componentDidMount() {
    this.checkSlideshow()
    window.addEventListener('resize', this.checkSlideshow)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
    window.removeEventListener('resize', this.checkSlideshow)
  }

  render() {
    const { doSetup } = this.props.users
    const {
      curForm,
      curOption,
      formShouldHide,
      initial,
      showSlideshow,
    } = this.state

    let formClass = ''
    if (!initial) {
      formClass = formShouldHide ? 'hide' : 'show'
    }
    const formWidth = 350

    return (
      <Layout className={indexStyle} gradient basicHeader noNav>
        {showSlideshow ? (
          <div className="wrapSlideshow">
            <Slideshow {...{ slides }} height={300} />
          </div>
        ) : null}
        <div className="wrapForm">
          {doSetup ? (
            <SetupForm maxWidth={formWidth} />
          ) : (
            [
              <Toggle
                options={['Sign in', 'Contact']}
                activeOption={curOption}
                onToggle={this.handleToggle}
                maxWidth={formWidth}
                key="1"
              />,
              curForm === 0 ? (
                <LoginForm
                  key="2"
                  maxWidth={formWidth}
                  className={formClass + 'Left'}
                  redirect
                />
              ) : (
                <ContactForm
                  key="3"
                  maxWidth={formWidth}
                  className={formClass + 'Right'}
                />
              ),
            ]
          )}
        </div>
      </Layout>
    )
  }
}
export default connect(({ users }) => ({ users }))(IndexPage)
