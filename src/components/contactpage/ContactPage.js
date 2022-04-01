import './ContactPage.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ContactPage = () => {

  const [message, setMessage] = useState({ name: '', email: '', subject: '', message: '', submitted: false });
  const navigate = useNavigate();

  const submitMessage = (e) => {
    e.preventDefault();
    setMessage({ ...message, submitted: true })
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <div className="container">
      <div className={`modal-bg ${message.submitted ? 'backdrop' : ''}`}>
        <h1 className="contact-page__title uppercase">Get in touch</h1>
        <p className="contact-page__description">Have a question or feedback? We would love to hear from you!</p>
        <form onSubmit={submitMessage}>
          <fieldset className="contact-form">
            <legend></legend>
            <div>
              <label htmlFor="name">Your first name:</label>
              <input
                type="text"
                id="name"
                value={message.name}
                onChange={(e) => setMessage({ ...message, name: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="email">Your email address:</label>
              <input
                type="text"
                id="email"
                value={message.email}
                onChange={(e) => setMessage({ ...message, email: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={message.subject}
                onChange={(e) => setMessage({ ...message, subject: e.target.value })}
                required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                type="text"
                id="message"
                value={message.message}
                onChange={(e) => setMessage({ ...message, message: e.target.value })}
                required>
              </textarea>
            </div>
            <button className="contact-form-btn">Send</button>
          </fieldset>
        </form>
      </div>
      {message.submitted && <div className="modal text-center">
        <h2>Thank you, {message.name} !</h2>
        <p>We've received your message and will get back to you as soon as possible!</p>
        <p className="redirect-message">Redirecting to Home...</p>
      </div>}
    </div>
  );
}

export default ContactPage;