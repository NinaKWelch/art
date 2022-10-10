import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './style.css'
import Layout from '../../features/Layout'
import Home from '../../pages/Home'
import Artists, { ArtistType } from '../../pages/Artists'
import Artist from '../../pages/Artist'
import NoMatch from '../../pages/NoMatch'

const App = () => {
  const navigate = useNavigate()
  const [artists, setArtists] = React.useState<ArtistType[]>([
    { id: '1', firstName: 'Artist 1' },
    { id: '2', firstName: 'Artist 2' },
  ])

  const handleRemoveArtist = (artistId: string) => {
    setArtists((state) => state.filter((artist) => artist.id !== artistId))
    // navigate a user programmatically to another route with useNavigate Hook
    navigate('/artists')
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        {/** gives each Route the same surrounding style */}
        <Route index element={<Home />} />
        {/** fallback for the / route */}
        <Route path="home" element={<Home />} />
        <Route path="artists" element={<Artists artists={artists} />}>
          <Route
            path=":artistId"
            element={<Artist onRemoveArtist={handleRemoveArtist} />}
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
        {/** equals to a 404 page of a website */}
      </Route>
    </Routes>
  )
}

export default App
