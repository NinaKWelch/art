// React Router 6: Authentication
// https://www.robinwieruch.de/react-router-authentication/
import React, { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface ValueProps {
  token: null | string
  onLogin: (token: null | unknown) => void
  onLogout: () => void
}

const AuthContext = createContext<ValueProps>(null as any)

export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
  children: React.ReactElement
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [token, setToken] = useState<null | string>(null)

  const fakeAuth: () => Promise<string | undefined> = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250)
    })

  const handleLogin = async () => {
    const apiToken: string | undefined = await fakeAuth()

    apiToken && setToken(apiToken)
    // redirect the user to the previous page (see features/ProtectedRoute component)
    const origin = location.state?.from?.pathname || '/admin'
    navigate(origin)
  }

  const handleLogout = () => {
    setToken(null)
  }

  const value: ValueProps = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
