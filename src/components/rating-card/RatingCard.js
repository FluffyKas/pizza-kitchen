import "./RatingCard.scss";
import star from "../../assets/images/icon-star.svg";
import { useState } from "react";
import { ThankYouCard } from "../";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariants } from "../../assets/animations/variants";

const nums = [1, 2, 3, 4, 5];

export const RatingCard = () => {
  const [activeRating, setActiveRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const selectRating = (e) => {
    setActiveRating(e.target.value);
  };

  const changeContent = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <AnimatePresence>
        {submitted ? (
          <ThankYouCard activeRating={activeRating} />
        ) : (
          <motion.div
            className="rating-card container"
            key={submitted}
            initial={{ y: "-100%", x: "-50%", opacity: 0 }}
            animate={{ y: "-50%", x: "-50%", opacity: 1 }}
            exit={{ y: "-175%", x: "-50%", opacity: 0 }}
          >
            <img
              src={star}
              alt=""
              aria-hidden="true"
              className="rating-card__img"
            />

            <h1 className="rating-card__title fw-600">How did we do?</h1>

            <p className="rating-card__description">
              Please let us know how we did with your order. All feedback is
              appreciated to help us improve our offering!
            </p>

            <form>
              <fieldset className="rating-card__form">
                <legend className="sr-only">Ratings:</legend>
                <div className="input-container">
                  {nums.map((num, index) => {
                    return (
                      <div className="focus-box" key={index}>
                        <input
                          type="radio"
                          name="rating"
                          id={num}
                          value={num}
                          onClick={selectRating}
                        />
                        <label htmlFor={num}>{num}</label>
                      </div>
                    );
                  })}
                </div>
                {activeRating && (
                  <button className="rating-card-btn" onClick={changeContent}>
                    Submit
                  </button>
                )}
              </fieldset>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
