import { Link } from "react-router-dom";
import thankyou from '../../assets/images/illustration-thank-you.svg';
import './ThankYouCard.scss';

const ThankYouCard = ({ activeRating }) => {
  return (
    <div className="container thank-you-container text-center">
      <img src={thankyou} alt="" aria-hidden="true" />
      <p className="final-rating">You selected {activeRating} out of 5</p>
      <p className="thank-you-title">Thank you!</p>
      <p className="thank-you-text">We appreciate you taking the time to give a rating. If you have a question or feedback, don't hesitate to get in touch!</p>
      <Link to="/" className="home-link">Back to Home page</Link>
    </div>
  );
}

export default ThankYouCard;