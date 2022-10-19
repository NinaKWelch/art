import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('ProtectedRoute', () => {
  test('redirects an unsigned user from protected route to home page', () => {
    renderWithRouter(<App />, { route: '/admin' })

    expect(screen.queryByText('Admin Page')).not.toBeInTheDocument()
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  test('logged in users can view protected route', async () => {
    renderWithRouter(<App />, { route: '/admin' })

    // login user
    await userEvent.click(screen.getByTestId('login-button'))
    await screen.findByText('Admin Page')

    expect(screen.getByText('Admin Page')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })
})
