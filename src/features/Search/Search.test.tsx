import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from './index'

describe('Search', () => {
  test('renders Search component', () => {
    const handleChange = jest.fn()

    render(
      <Search value="" onChange={handleChange}>
        Search:
      </Search>
    )

    expect(screen.getByTestId('search-input')).not.toHaveValue()
  })
})
