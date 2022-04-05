import './ContactPage.scss';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';

const ContactPage = () => {

  const [message, setMessage] = useState({ name: '', email: '', subject: '', message: '', submitted: false });
  const navigate = useNavigate();

  const submitMessage = (e) => {
    e.preventDefault();
    setMessage({ ...message, submitted: true })
    setTimeout(() => {
      navigate('/');
    }, 3500);
  }

  return (

    <>
      <div className="contact-page container">
        <div className={`modal-bg ${message.submitted ? 'backdrop' : ''}`}>
          <h1 className="contact-page__title uppercase">Get in touch</h1>
          <p className="contact-page__description">Have a question or feedback? We would love to hear from you!</p>
          <form onSubmit={submitMessage}>
            <fieldset className="contact-form">
              <legend className="sr-only">Contact Form</legend>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  autocomplete="off"
                  value={message.name}
                  onChange={(e) => setMessage({ ...message, name: e.target.value })}
                  required />
                <label htmlFor="name">First name:</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  autocomplete="off"
                  value={message.email}
                  onChange={(e) => setMessage({ ...message, email: e.target.value })}
                  required />
                <label htmlFor="email">Email:</label>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="subject"
                  placeholder=" "
                  autocomplete="off"
                  value={message.subject}
                  onChange={(e) => setMessage({ ...message, subject: e.target.value })}
                  required />
                <label htmlFor="subject">Subject:</label>
              </div>
              <div className="input-wrapper">
                <textarea
                  type="text"
                  id="message"
                  placeholder=" "
                  autocomplete="off"
                  value={message.message}
                  onChange={(e) => setMessage({ ...message, message: e.target.value })}
                  required>
                </textarea>
                <label htmlFor="message">Message:</label>
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

      <footer>
        <div className="footer-inner-wrapper">
          <div className=" contact-info">
            <div className="contact-info-container">
              <h3>Call us</h3>
              <p>+34 108 231 4622</p>
              <p>+34 127 220 3094</p>
            </div>
            <div className="contact-info-container">
              <h3>Location</h3>
              <p>35 Main St, The City, TH 4502 H2</p>
            </div>
            <div className="contact-info-container">
              <h3>Business hours</h3>
              <p>Monday: Closed</p>
              <p>Tuesday - Sunday: 11am - 22pm</p>
            </div>
          </div>
          <ul className="social-media">
            <li><a href="https://www.facebook.com/" aria-label="Facebook">
              <img src={facebook} alt="" aria-hidden="true" />
            </a></li>
            <li><a href="https://twitter.com/" aria-label="Twitter">
              <img src={twitter} alt="" aria-hidden="true" />
            </a></li>
            <li><a href="https://www.instagram.com" aria-label="Instagram">
              <img src={instagram} alt="" aria-hidden="true" />
            </a></li>
            <li><a href="https://www.pinterest.com/instagram" aria-label="Pinterest">
              <img src={pinterest} alt="" aria-hidden="true" />
            </a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default ContactPage;