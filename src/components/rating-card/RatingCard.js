import './RatingCard.scss';
import star from '../../assets/images/icon-star.svg';
import OrangeButton from '../orangebtn/OrangeButton';

const RatingCard = ({ activeRating, setActiveRating }) => {

  const selectRating = (e) => {
    setActiveRating(e.target.value)
  }

  return (
    <div className="rating-card-outer">

      <div className="rating-card container">

        <img src={star} alt="" aria-hidden="true" className="rating-card__img" />

        <h1 className="rating-card__title fw-600">How did we do?</h1>

        <p className="rating-card__description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <form>
          <fieldset className="rating-card__form">
            <legend className="sr-only">Ratings:</legend>
            <div className="input-container">
              <input type="radio" name="rating" id="1" value="1" onClick={selectRating} />
              <label htmlFor="1">1</label>
              <input type="radio" name="rating" id="2" value="2" onClick={selectRating} />
              <label htmlFor="2">2</label>
              <input type="radio" name="rating" id="3" value="3" onClick={selectRating} />
              <label htmlFor="3">3</label>
              <input type="radio" name="rating" id="4" value="4" onClick={selectRating} />
              <label htmlFor="4">4</label>
              <input type="radio" name="rating" id="5" value="5" onClick={selectRating} />
              <label htmlFor="5">5</label>
            </div>
            {activeRating && <OrangeButton nextPage={"/thankyou"} text={"Submit"} className="submit-btn" />}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default RatingCard;