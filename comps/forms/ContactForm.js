import React, { Component } from 'react'
import { maxContactMsg } from '../../util/config'
import { createContact } from '../../redux/actions'
import Form from './Form'
import Field from './Field'
import getError from '../../util/getError'

const fields = {
  name: {
    icon: 'user',
    required: true,
    maxLength: 128,
    label: 'Your name',
  },
  email: {
    type: 'email',
    required: true,
    icon: 'envelope',
    label: 'Your email',
  },
  confEmail: {
    type: 'email',
    required: true,
    icon: 'envelope',
    label: 'Confirm email',
  },
  msg: {
    required: true,
    type: 'textarea',
    label: 'Your message',
    maxLength: maxContactMsg,
  },
}
const fieldKeys = ['name', 'email', 'confEmail', 'msg']

class ContactForm extends Component {
  constructor() {
    super()
    let state = {
      error: null,
      pending: false,
    }
    fieldKeys.forEach(f => (state[f] = ''))
    this.state = state
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  submit = e => {
    e.preventDefault()
    if (this.state.pending) return
    const err = error => this.setState({ error, pending: false })
    const data = {}
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
    if (hasMissing) return err(`${missingField} is required`)
    if (data.email.toLowerCase() !== data.confEmail.toLowerCase()) {
      return err(`Emails don't match`)
    }
    delete data.confEmail
    this.setState({ pending: true, error: null })
    createContact(data)
      .then(() => {
        const cleanState = {
          pending: false,
          error: 'Message sent successfully',
        }
        fieldKeys.forEach(f => (cleanState[f] = ''))
        this.setState(cleanState)
      })
      .catch(error => err(getError(error)))
  }

  render() {
    const { pending, error } = this.state
    const { maxWidth, className } = this.props
    return (
      <Form
        submit={this.submit}
        {...{
          error,
          pending,
          maxWidth,
          className,
        }}
      >
        {fieldKeys.map(f => {
          const { label, ...field } = fields[f]
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

export default ContactForm
