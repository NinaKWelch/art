import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './index'

describe('Login', () => {
  test('renders login component', () => {
    render(<Login />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })

  test('renders login form', () => {
    render(<Login />)

    expect(screen.getByLabelText(/email/i)).toBeRequired()
    expect(screen.getByLabelText(/password/i)).toBeRequired()
    expect(screen.getByLabelText(/remember/i)).toBeChecked()
    expect(screen.getByTestId('login-form')).toHaveFormValues({
      email: '',
      password: '',
      remember: true,
    })
    expect(screen.getByTestId('login-form-button')).toHaveAttribute(
      'type',
      'submit'
    )
  })

  test('updates login form values on change', async () => {
    render(<Login />)

    await userEvent.type(screen.getByLabelText(/email/i), 'me@me.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password')
    await userEvent.click(screen.getByLabelText(/remember/i))

    expect(screen.getByTestId('login-form')).toHaveFormValues({
      email: 'me@me.com',
      password: 'password',
      remember: false,
    })
  })
})
