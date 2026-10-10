
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUpWithEmailAndPassword } from '../Firebase'
import '../App.css'

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!fullName.trim() || !email.trim() || !password) {
      setError('Please fill in all fields.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    try {
      setLoading(true)

      await signUpWithEmailAndPassword(
        fullName.trim(),
        email.trim(),
        password
      )

      alert('Account created successfully! Please log in.')
      navigate('/login')
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please log in.')
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.')
      } else if (error.code === 'auth/weak-password') {
        setError('Please choose a stronger password.')
      } else {
        setError(error.message || 'Unable to create account. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className= "auth-container">
    <div className="auth-card">
      <h2>Create an Account</h2>

      <form onSubmit={handleSubmit}>
        <label type="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          placeholder="Enter your first and last name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label type="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label type="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={6}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
    </div>
  )
}

export default SignUp
