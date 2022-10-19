import React from 'react'
import { renderWithRouter } from '../../utils/testUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../components/App'

describe('Artists', () => {
  test('renders Artists component', () => {
    renderWithRouter(<App />, { route: '/artists' })

    expect(screen.getByText('Artists Page')).toBeInTheDocument()
  })

  test('renders artist list', () => {
    renderWithRouter(<App />, { route: '/artists' })

    const list = screen.getAllByRole('listitem')
    expect(list).toHaveLength(2)
  })

  test('artist info is shown by clicking on the artist list item', async () => {
    renderWithRouter(<App />, { route: '/artists' })

    await userEvent.click(screen.getByText('Artist 1'))
    await screen.findByText('1')

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('artist list length is reduced when artist is removed', async () => {
    renderWithRouter(<App />, { route: '/artists' })

    expect(screen.getByText('Artist 1')).toBeInTheDocument()

    await userEvent.click(screen.getByText('Artist 1'))
    await screen.findByText('Remove')
    await userEvent.click(screen.getByText('Remove'))

    expect(screen.queryByText('Artist 1')).not.toBeInTheDocument()
  })
})
