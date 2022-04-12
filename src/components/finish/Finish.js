import { useState } from "react";
import pizza1 from '../../assets/images/pizza1.png';
import pizza2 from '../../assets/images/pizza2.png';
import pizza3 from '../../assets/images/pizza3.png';
import pizza4 from '../../assets/images/pizza4.png';
import arrow from '../../assets/images/up-arrow.png';
import RatingCard from "../rating-card/RatingCard";
import './Finish.scss'
import { motion } from 'framer-motion';
import { pageAnimation } from '../../assets/animations/variants';

const Finish = ({ newPizza }) => {

  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = () => {
    setActiveModal(true)
  }

  return (
    <motion.div className="container text-center"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={`modal-bg ${activeModal ? 'backdrop' : ''}`}>
        <h1 className="finish-title">Awesome, your order is on the way!</h1>
        <p>You ordered:</p>
        <p>A pizza with {newPizza.base} base and the following toppings: {newPizza.toppings.join(', ')}. </p>
        <motion.div className="pizza-img-holder"
          variants={pageAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.img src={pizza1} alt="" aria-hidden="true" className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: .5, duration: 2 }}
          />
          <motion.img src={pizza2} alt="" aria-hidden="true" className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 1.5, duration: 2 }}
          />
          <motion.img src={pizza3} alt="" aria-hidden="true" className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2.5, duration: 2 }}
          />
          <motion.img src={pizza4} alt="" aria-hidden="true" className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          />
        </motion.div>

        <div className="feedback-text">
          <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-left" /></span>
          <p>If you got a minute, tell us <button className="feedback-modal-btn" onClick={toggleModal}>how we did!</button></p>
          <span><img src={arrow} alt="" aria-hidden="true" className="arrow arrow-right" /></span>
        </div>
      </div>
      {activeModal && <RatingCard />}
    </motion.div >
  );
}

export default Finish;

