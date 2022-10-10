import React from 'react'
import { Link } from 'react-router-dom'
import { ArtistType } from './index'

interface ArtistListItemProps {
  artist: ArtistType
}

const ArtistListItem: React.FC<ArtistListItemProps> = ({ artist }) => (
  <li>
    <Link to={artist.id}>{artist.firstName}</Link>
  </li>
)

export default ArtistListItem
