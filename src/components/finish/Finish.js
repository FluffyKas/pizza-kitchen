import { Link } from "react-router-dom";
import delivery from '../../assets/images/online-food-delivery.png';
import arrow from '../../assets/images/up-arrow.png';
import './Finish.scss'

const Finish = ({ newPizza }) => {
  return (
    <div className="container text-center">
      <h1 className="finish-title">Awesome, your order is on the way!</h1>
      <p>You ordered:</p>
      <p>A pizza with {newPizza.base} base and the following toppings: {newPizza.toppings.join(', ')}. </p>
      <img src={delivery} alt="" aria-hidden="true" className="delivery-illustration" />

      <div className="feedback-text">
        <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-left" /></span>
        <p>If you got a minute, tell us <Link to="/rating" className="feedback-link">how we did!</Link></p>
        <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-right" /></span>
      </div>
    </div >
  );
}

export default Finish;

