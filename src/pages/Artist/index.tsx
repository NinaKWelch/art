import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

interface ArtistProps {
  onRemoveArtist: any
}
const Artist: React.FC<ArtistProps> = ({ onRemoveArtist }) => {
  const { artistId } = useParams()

  return (
    <div>
      <h2>{artistId}</h2>
      <button type="button" onClick={() => onRemoveArtist(artistId)}>
        Remove
      </button>
    </div>
  )
}

export default Artist
