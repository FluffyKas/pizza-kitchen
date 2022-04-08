import { useState } from "react";
import delivery from '../../assets/images/online-food-delivery.png';
import arrow from '../../assets/images/up-arrow.png';
import RatingCard from "../rating-card/RatingCard";
import './Finish.scss'

const Finish = ({ newPizza }) => {

  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = () => {
    setActiveModal(true)
  }

  return (
    <div className="container text-center">
      <div className={`modal-bg ${activeModal ? 'backdrop' : ''}`}>
        <h1 className="finish-title">Awesome, your order is on the way!</h1>
        <p>You ordered:</p>
        <p>A pizza with {newPizza.base} base and the following toppings: {newPizza.toppings.join(', ')}. </p>
        <img src={delivery} alt="" aria-hidden="true" className="delivery-illustration" />

        <div className="feedback-text">
          <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-left" /></span>
          <p>If you got a minute, tell us <button className="feedback-modal-btn" onClick={toggleModal}>how we did!</button></p>
          <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-right" /></span>
        </div>
      </div>
      {activeModal && <RatingCard />}
    </div >
  );
}

export default Finish;

