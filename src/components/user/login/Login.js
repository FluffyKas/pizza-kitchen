import './Login.scss';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext'
import { auth } from '../../../firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth()
  const navigate = useNavigate();

  async function handleSignin(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await login(auth, email, password)
      navigate('/');
    } catch {
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <div className="container signup">
      <h1 className="signup__title uppercase">Login</h1>
      <form onSubmit={handleSignin}>
        <fieldset className="text-fieldset">
          <legend className="sr-only">Login form</legend>
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
            <label htmlFor="subject">Password:</label>
          </div>
          <button className="form-btn">Login</button>
        </fieldset>
      </form>
      <p>Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link></p>
    </div>
  );
}

export default Login;