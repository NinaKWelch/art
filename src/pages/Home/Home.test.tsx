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

    expect(screen.queryByText(/searches for something/)).toBeNull()

    await userEvent.type(screen.getByRole('textbox'), 'something')

    expect(screen.getByText(/Searches for something/)).toBeInTheDocument()
  })
})
