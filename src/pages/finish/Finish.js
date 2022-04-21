import { useState } from "react";
import pizza1 from "../../assets/images/pizza1.png";
import pizza2 from "../../assets/images/pizza2.png";
import pizza3 from "../../assets/images/pizza3.png";
import pizza4 from "../../assets/images/pizza4.png";
import pizzaDark1 from "../../assets/images/pizza-dark-1.png";
import pizzaDark2 from "../../assets/images/pizza-dark-2.png";
import pizzaDark3 from "../../assets/images/pizza-dark-3.png";
import pizzaDark4 from "../../assets/images/pizza-dark-4.png";
import arrow from "../../assets/images/up-arrow.png";
import arrowDark from "../../assets/images/up-arrow-black.png";
import { RatingCard } from "../../components";
import "./Finish.scss";
import { motion } from "framer-motion";
import { pageAnimation } from "../../assets/animations/variants";
import { usePizza, useTheme } from "../../context";

export const Finish = () => {
  const [activeModal, setActiveModal] = useState(false);
  const { newPizza } = usePizza();
  const { theme } = useTheme();

  const toggleModal = () => {
    setActiveModal(true);
  };

  return (
    <motion.div
      className="container text-center finish"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={`modal-bg ${activeModal ? "backdrop" : ""}`}>
        <h1 className="finish-title">Awesome, your order is on the way!</h1>
        <p className="order-title">You ordered:</p>
        <p className="order-details">
          A pizza with {newPizza.base} base and the following toppings:{" "}
          {newPizza.toppings.join(", ")}.{" "}
        </p>
        <motion.div
          className="pizza-img-holder"
          variants={pageAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.img
            src={theme === "dark" ? pizza1 : pizzaDark1}
            alt=""
            aria-hidden="true"
            className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 0.5,
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3.25,
            }}
          />
          <motion.img
            src={theme === "dark" ? pizza2 : pizzaDark2}
            alt=""
            aria-hidden="true"
            className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 1.75,
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3.25,
            }}
          />
          <motion.img
            src={theme === "dark" ? pizza3 : pizzaDark3}
            alt=""
            aria-hidden="true"
            className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 3,
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3.25,
            }}
          />
          <motion.img
            src={theme === "dark" ? pizza4 : pizzaDark4}
            alt=""
            aria-hidden="true"
            className="delivery-illustration"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 4.5,
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 4.25,
            }}
          />
        </motion.div>

        <div className="feedback-text">
          <span>
            <img
              src={theme === "dark" ? arrow : arrowDark}
              alt=""
              aria-hidden="true"
              className="arrow arrow-left"
            />
          </span>
          <p>
            If you got a minute, tell us{" "}
            <button className="feedback-modal-btn" onClick={toggleModal}>
              how we did!
            </button>
          </p>
          <span>
            <img
              src={theme === "dark" ? arrow : arrowDark}
              alt=""
              aria-hidden="true"
              className="arrow arrow-right"
            />
          </span>
        </div>
      </div>
      {activeModal && <RatingCard />}
    </motion.div>
  );
};
