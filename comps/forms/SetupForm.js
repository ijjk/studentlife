import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import { createUser, login } from '../../redux/actions'
import Form from './Form'
import Field from './Field'
import getError from '../../util/getError'

const fields = {
  firstName: { label: 'First name', icon: 'user', required: true },
  lastName: { label: 'Last name', icon: 'user', required: true },
  username: { label: 'Username', icon: 'id-card' },
  email: { label: 'Email', icon: 'envelope', required: true },
  password: { label: 'Password', required: true, type: 'password' },
  confPassword: { label: 'Confirm password', required: true, type: 'password' },
}

const fieldKeys = [
  'firstName',
  'lastName',
  'username',
  'email',
  'password',
  'confPassword',
]

class LoginForm extends Component {
  constructor() {
    super()
    let state = {
      pending: false,
      showPass: false,
      createError: null,
      createPending: false,
    }
    fieldKeys.forEach(f => (state[f] = ''))
    this.state = state
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
    const data = { role: 'admin' }
    let missingField
    const hasMissing = fieldKeys.some(f => {
      const field = fields[f]
      const val = this.state[f].trim()
      if (!val.length && field.required) {
        missingField = field.label
        return true
      }
      data[f] = val
    })
    const err = createError =>
      this.setState({ createError, createPending: false })
    if (hasMissing) return err(`${missingField} is required`)
    if (data.password !== data.confPassword) return err(`Passwords don't match`)
    delete data.confPassword
    this.setState({ createPending: true, createError: null })
    createUser(data)
      .then(() => login({ email: data.email, password: data.password }))
      .then(() => Router.push('/home'))
      .catch(error => err(getError(error)))
  }

  render() {
    const { maxWidth, className, users } = this.props
    const { showPass, createError, createPending } = this.state

    return (
      <Form
        submit={this.submit}
        head={<h4>Setup account</h4>}
        {...{
          maxWidth,
          className,
          error: createError || users.error,
          pending: createPending || users.pending,
        }}
      >
        {fieldKeys.map(f => {
          const { label, ...field } = fields[f]
          if (field.type === 'password') {
            field.icon = 'lock'
            field.type = showPass ? 'text' : 'password'
            field.extraIcon = showPass ? 'eye-slash' : 'eye'
            field.extraIconProps = { onClick: this.toggleShowPass }
          }
          return (
            <Field
              {...field}
              key={f}
              name={f}
              placeholder={label}
              value={this.state[f]}
              type={field.type || 'text'}
              onChange={this.handleChange}
            />
          )
        })}
      </Form>
    )
  }
}

export default connect(({ users }) => ({ users }))(LoginForm)
