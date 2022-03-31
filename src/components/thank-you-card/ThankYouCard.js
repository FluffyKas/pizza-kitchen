import { Link } from "react-router-dom";
import thankyou from '../../assets/images/illustration-thank-you.svg';

const ThankYouCard = () => {
  return (
    <div className="container">
      <p>YAAAY</p>
      <img src={thankyou} alt="" />
      <Link to="/">Back to Home page</Link>
    </div>
  );
}

export default ThankYouCard;