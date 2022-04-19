import "./RatingCard.scss";
import star from "../../assets/images/icon-star.svg";
import { useState } from "react";
import { ThankYouCard } from "../";
import { motion } from "framer-motion";
import { modalVariants } from "../../assets/animations/variants";

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
      {submitted ? (
        <ThankYouCard activeRating={activeRating} />
      ) : (
        <motion.div
          className="rating-card container"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
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
                <div className="focus-box">
                  <input
                    type="radio"
                    name="rating"
                    id="1"
                    value="1"
                    onClick={selectRating}
                  />
                  <label htmlFor="1">1</label>
                </div>
                <div className="focus-box">
                  <input
                    type="radio"
                    name="rating"
                    id="2"
                    value="2"
                    onClick={selectRating}
                  />
                  <label htmlFor="2">2</label>
                </div>
                <div className="focus-box">
                  <input
                    type="radio"
                    name="rating"
                    id="3"
                    value="3"
                    onClick={selectRating}
                  />
                  <label htmlFor="3">3</label>
                </div>
                <div className="focus-box">
                  <input
                    type="radio"
                    name="rating"
                    id="4"
                    value="4"
                    onClick={selectRating}
                  />
                  <label htmlFor="4">4</label>
                </div>
                <div className="focus-box">
                  <input
                    type="radio"
                    name="rating"
                    id="5"
                    value="5"
                    onClick={selectRating}
                  />
                  <label htmlFor="5">5</label>
                </div>
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
    </>
  );
};
