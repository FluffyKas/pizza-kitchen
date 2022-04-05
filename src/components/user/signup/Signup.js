import './SignUp.scss';
import { useRef, useState } from 'react';
import { Link } from "react-router-dom";

const SignUp = () => {

  // const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
    //   return setError('Passwords do not match')
    // }

    // try {
    //   setError('')
    //   setLoading(true)
    //   await signup(emailRef.current.value, passwordRef.current.value);
    // } catch {
    //   setError('Failed to create an account')
    // }
    // setLoading(false)
  }

  return (
    <div className="container signup">
      <h1 className="signup__title uppercase">Login</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <fieldset className="login-form">
          <legend className="sr-only">Login form</legend>
          {/* <div className="input-wrapper">
            <input
              type="text"
              id="name"
              placeholder=" "
              required />
            <label htmlFor="name">First name:</label>
          </div> */}
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              placeholder=" "
              ref={emailRef}
              required />
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              placeholder=" "
              ref={passwordRef}
              required />
            <label htmlFor="subject">Password:</label>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              placeholder=" "
              ref={passwordConfirmationRef}
              required />
            <label htmlFor="subject">Password confirmation:</label>
          </div>
          <button disabled={loading} className="contact-form-btn">Sign up</button>
        </fieldset>
      </form>
      <p>Don't have an account? <Link to="/">Sign up here</Link></p>
    </div>
  );
}

export default SignUp;