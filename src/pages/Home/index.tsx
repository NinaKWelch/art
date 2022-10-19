import React, { useState } from 'react'
import './style.css'
import Search from '../../features/Search'
import Login from '../../features/Login'

const Home = () => {
  const [search, setSearch] = useState('')

  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Home Page</h2>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p data-testid="search-text">Searches for {search ? search : '...'}</p>
      <Login />
    </div>
  )
}

export default Home
