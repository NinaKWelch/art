import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from './index'

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />)
    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })

  test('renders search input as text', async () => {
    render(<Home />)

    const searchText = screen.getByTestId('search-text')
    expect(searchText).toHaveTextContent(/^Searches for ...$/)
    await userEvent.type(screen.getByTestId('search-input'), 'something')

    expect(searchText).toHaveTextContent(/^Searches for something$/)
  })
})
