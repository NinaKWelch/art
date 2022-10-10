import React from 'react'
import { NavLink } from 'react-router-dom'

const TopNav = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/artists">Artists</NavLink>
    </nav>
  )
}

export default TopNav
