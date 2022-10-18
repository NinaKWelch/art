import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('Layout', () => {
  test('renders brand name and login button', () => {
    renderWithRouter(<App />)

    const brandName = screen.getByText(/app/i)
    expect(brandName).toBeInTheDocument()

    // login/logout button
    expect(screen.getByRole('button')).toHaveTextContent('Sign In')
  })

  test('button toggles between login/logout when clicked', async () => {
    renderWithRouter(<App />)

    // login user
    await userEvent.click(screen.getByText('Sign In'))
    await screen.findByText('Sign Out')

    expect(screen.getByText('Sign Out')).toBeInTheDocument()

    // logout user
    await userEvent.click(screen.getByText('Sign Out'))
    await screen.findByText('Sign In')

    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })
})
