import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import App from '../../components/App'

describe('NoMatch', () => {
  test('renders NoMatch component when there is no matching route', () => {
    renderWithRouter(<App />, { route: '/nomatchroute' })

    expect(screen.getByText(/404/)).toBeInTheDocument()
  })
})
