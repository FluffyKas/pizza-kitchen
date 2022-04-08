import './SignUp.scss'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom"
import { auth } from '../../../firebase'

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth()
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(auth, email, password)
      navigate('/');
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div className="container signup">
      <h1 className="signup__title uppercase">Signup</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <fieldset className="text-fieldset">
          <legend className="sr-only">Signup form</legend>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              placeholder=" "
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              placeholder=" "
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              required />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="confirm-password"
              placeholder=" "
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
            <label htmlFor="confirm-password">Password confirmation:</label>
          </div>
          <button disabled={loading} className="form-btn">Sign up</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;