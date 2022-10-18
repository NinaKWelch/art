import React from 'react'
import { useAuth } from '../../context/AuthProvider'

const Admin = () => {
  const { token } = useAuth()

  if (!token) return null

  return (
    <div>
      <h2>Admin Page</h2>
      <p>{token}</p>
    </div>
  )
}

export default Admin
