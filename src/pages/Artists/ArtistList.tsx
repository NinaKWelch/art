import React from 'react'
import { ArtistType } from './index'
import ArtistListItem from './ArtistListItem'

interface ArtistListProps {
  artists: ArtistType[]
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => (
  <ul>
    {artists.map((artist: ArtistType) => (
      <ArtistListItem key={artist.id} artist={artist} />
    ))}
  </ul>
)

export default ArtistList
