import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import './style.css'
import TopNav from '../../features/TopNav'

const Layout = () => {
  const { token, onLogout, onLogin } = useAuth()

  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>App</h1>
        <TopNav />
        {token ? (
          <button type="button" data-testid="login-button" onClick={onLogout}>
            Sign Out
          </button>
        ) : (
          <button type="button" data-testid="login-button" onClick={onLogin}>
            Sign In
          </button>
        )}
        {/*<a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>*/}
      </header>
      <main className="layout-cotent">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
