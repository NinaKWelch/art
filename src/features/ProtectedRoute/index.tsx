import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import './style.css'

interface ProtectedRouteProps {
  children: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // get the current location
  // and send the state of the current page to the redirected page
  const location = useLocation()
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />
  }

  return children
}

export default ProtectedRoute

/**
 * Even though the route is protected and not accessible by unauthorized users,
 * a malicious user could still modify the client-side code in the browser
 * (e.g. removing the condition to redirect from the ProtectedRoute).
 * Therefore, all sensitive API calls that happen on protected pages
 * (e.g. Dashboard page) need to be secured from the server-side too.
 */
