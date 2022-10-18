import React from 'react'
import { NavLink } from 'react-router-dom'

const TopNav = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/artists">Artists</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  )
}

export default TopNav
