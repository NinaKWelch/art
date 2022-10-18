import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './index'

describe('Login', () => {
  test('renders login component', () => {
    render(<Login />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
})
