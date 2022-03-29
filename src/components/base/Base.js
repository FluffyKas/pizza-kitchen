import { Link } from "react-router-dom";
import './Base.scss';
import OrangeButton from '../orangebtn/OrangeButton';

const Base = () => {

  const bases = ['classic', 'thin', 'stuffed', 'chicago-style']

  return (
    <div className="base container">
      <h1 className="base-title">Choose your base: </h1>
      <form>
        <fieldset>
          {bases.map((base) => {
            return (
              <div>
                <input type="checkbox" id={base} value={base} name={base} />
                <label htmlFor={base}>{base}</label>
              </div>
            )
          })}
          <OrangeButton nextPage={"/toppings"} text={"Next: Toppings"} />
        </fieldset>
      </form>
    </div>
  );
}

export default Base;