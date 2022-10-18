import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

// Helper function that renders the router for test pages that have routes or links
export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    ...render(ui, { wrapper: BrowserRouter }),
  }
}
