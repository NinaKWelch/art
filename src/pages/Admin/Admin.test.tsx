import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('Admin', () => {
  test('renders Admin component when user is logged in', async () => {
    renderWithRouter(<App />, { route: '/admin' })

    await userEvent.click(screen.getByText('Sign In'))
    await screen.findByText('Admin Page')

    expect(screen.getByText('Admin Page')).toBeInTheDocument()
  })
})
