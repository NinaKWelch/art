import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import ArtistList from './ArtistList'

export type ArtistType = {
  id: string
  firstName: string
}

interface ArtistsProps {
  artists: ArtistType[]
}

const Artists: React.FC<ArtistsProps> = ({ artists }) => {
  // useSearchParams reads (get()) and writes (setSearchParams())
  // the current search params from the URL
  // thos state is a URL state and not a local state in React
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTerm = searchParams.get('name') || ''

  const handleSearch = (event: any) => {
    const name = event.target.value

    if (name) {
      setSearchParams({ name: event.target.value })
    } else {
      setSearchParams({})
    }
  }

  const filterArtists = (arr: ArtistType[]) =>
    arr.filter((artist) =>
      artist.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <ArtistList artists={filterArtists(artists)} />
      <Outlet />
    </div>
  )
}
export default Artists
