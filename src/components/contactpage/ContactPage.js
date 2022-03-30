import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="contact-page__title uppercase">Get in touch</h1>
      <p className="contact-page__description">Have a question or feedback? We would love to hear from you!</p>
      <form>
        <fieldset className="contact-form">
          <legend></legend>
          <div>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Your email address:</label>
            <input type="text" id="email" />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" />
          </div>
          <button className="contact-form-btn">Send</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactPage;