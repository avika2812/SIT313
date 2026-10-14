import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  signinwithGoogle,
  signinAuthUserWithEmailAndPassword,
} from '../Firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleGoogleLogin() {
    try {
      setError('')
      const result = await signinwithGoogle()
      console.log('Logged in successfully:', result.user)
      navigate('/')
    } catch (error) {
      console.error('Google login error:', error)
      setError('Google login failed. Please try again.')
    }
  }

  async function handleEmailLogin(event) {
    event.preventDefault()
    setError('')

    try {
      setLoading(true)

      await signinAuthUserWithEmailAndPassword(
        email.trim(),
        password
      )

      navigate('/')
    } catch (error) {
      console.error('Email login error:', error)

      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        setError(
          'Incorrect email or password. Please try again or sign up.'
        )
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else {
        setError('Login failed. Please check your details and try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <p>Welcome back to DEV@Deakin!</p>

        <form onSubmit={handleEmailLogin}>
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login with Email'}
          </button>
        </form>

        <button type="button" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
