// https://www.robinwieruch.de/react-testing-library/
import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../utils/testUtils'
import App from './index'

describe('App', () => {
  test('renders App component', () => {
    renderWithRouter(<App />)

    // implicit assertion with string argument
    // because getByText would throw error
    // if element wouldn't be there
    // screen.getByText('App')

    // explicit assertion with regular expression
    // recommended
    expect(screen.getByText(/app/i)).toBeInTheDocument()
    // NOTE: string argument is used for the exact match,
    // a regular expression can be used for a partial match

    // check all the selectable roles
    // screen.getByRole('')

    // use debug to check HTML
    // screen.debug()
    // const element = screen.getByText(/app/i)
    // screen.debug(element)
  })
})
