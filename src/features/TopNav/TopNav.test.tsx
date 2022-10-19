import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen, fireEvent } from '@testing-library/react'
import App from '../../components/App'

describe('TopNav', () => {
  test('app renders navbar with three links', () => {
    renderWithRouter(<App />)

    // navbar
    const navbar = screen.getByRole('navigation')
    expect(navbar).toBeInTheDocument()

    // navbar links
    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(3)
  })

  test('links open the corresponding page', () => {
    renderWithRouter(<App />)

    // click on artists link
    fireEvent.click(screen.getByText('Artists'))

    expect(screen.getByText('Artists Page')).toBeInTheDocument()

    // click on home link
    fireEvent.click(screen.getByText('Home'))

    expect(screen.getByText('Home Page')).toBeInTheDocument()

    // click on admin link (unsigned user should be redirected to home page)
    fireEvent.click(screen.getByText('Admin'))

    expect(screen.queryByText('Admin Page')).not.toBeInTheDocument()
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
