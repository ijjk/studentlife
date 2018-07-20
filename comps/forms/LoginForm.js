import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import Form from './Form'
import Field from './Field'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    pending: false,
    showPass: false,
  }

  static getDerivedStateFromProps({ redirect, users }, state) {
    const { error, pending } = users
    if (!pending && !error && state.pending && redirect) {
      Router.push('/home')
    }
    return pending !== state.pending ? { pending } : null
  }

  toggleShowPass = () => {
    this.setState({ showPass: !this.state.showPass })
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  submit = e => {
    e.preventDefault()
    let { email, password } = this.state
    const { users } = this.props
    if (users.pending) return

    email = email.trim()
    password = password.trim()

    if (email.length === 0 || password.length === 0) {
      return
    }

    login({ email, password })
  }

  render() {
    const { email, password, showPass } = this.state
    const { maxWidth, className, users } = this.props

    return (
      <Form
        submit={this.submit}
        {...{
          maxWidth,
          className,
          error: users.error,
          pending: users.pending,
        }}
      >
        <Field
          type="email"
          name="email"
          value={email}
          icon="envelope"
          placeholder="Email"
          onChange={this.handleChange}
        />

        <Field
          icon="lock"
          maxLength="256"
          value={password}
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          type={showPass ? 'text' : 'password'}
          extraIcon={showPass ? 'eye-slash' : 'eye'}
          extraIconProps={{ onClick: this.toggleShowPass }}
        />
      </Form>
    )
  }
}

export default connect(({ users }) => ({ users }))(LoginForm)
