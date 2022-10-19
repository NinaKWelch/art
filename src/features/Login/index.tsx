import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [remember, setRemember] = useState<boolean>(true)
  const handleChange = (e: any) => {
    const target = e.target

    switch (target.name) {
      case 'email':
        setEmail(target.value)
        break
      case 'password':
        setPassword(target.value)
        break
      case 'remember':
        setRemember(!remember)
        break
      default:
        return
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('DONE: ', email, password, remember)
    setEmail('')
    setPassword('')
    setRemember(true)
  }

  return (
    <div>
      <h2>Login</h2>
      <form data-testid="login-form" onSubmit={handleSubmit}>
        <label>
          Email:{' '}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:{' '}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Remember Me:{' '}
          <input
            type="checkbox"
            name="remember"
            checked={remember}
            onChange={handleChange}
          />
        </label>
        <button data-testid="login-form-button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
