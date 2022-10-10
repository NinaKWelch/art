import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.css'
import TopNav from '../../features/TopNav'

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1>App</h1>
        <TopNav />
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
