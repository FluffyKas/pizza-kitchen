// import './ForgotPassword.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext'
import { auth } from '../../../firebase'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth()

  async function handleReset(e) {
    e.preventDefault();

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(auth, email)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }
    setLoading(false)
  }

  return (
    <div className="container signup">
      <h1 className="signup__title uppercase">Password reset</h1>
      <form onSubmit={handleReset}>
        {error}
        {message}
        <fieldset className="text-fieldset">
          <legend className="sr-only">Password reset form</legend>
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
          <button disabled={loading} className="form-btn">Reset password</button>
        </fieldset>
      </form>
      <Link to="/login">Back to login</Link>
    </div>
  );
}

export default ForgotPassword;