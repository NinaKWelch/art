import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('Artist', () => {
  test('renders Artist component', () => {
    renderWithRouter(<App />, { route: '/artists/1' })

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('removes artist when Remove button is clicked', async () => {
    renderWithRouter(<App />, { route: '/artists/1' })

    await userEvent.click(screen.getByText('Remove'))

    expect(screen.queryByText('1')).toBeNull()
    
  })
})
