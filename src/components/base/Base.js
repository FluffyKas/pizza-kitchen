import './Base.scss';
import OrangeButton from '../orangebtn/OrangeButton';

const Base = ({ setNewPizza, newPizza }) => {

  const bases = ['Classic', 'Thin', 'Stuffed', 'Chicago-style']

  const addBase = (e) => {
    setNewPizza(
      {
        ...newPizza,
        base: e.target.value
      }
    )
  }

  return (
    <div className="base container">
      <form className="base-form">
        <fieldset>
          <legend className="base-title fw-700">Choose your base:</legend>
          {bases.map((base, index) => {
            return (
              <div key={index} className="base-input-container fw-500">
                <input type="radio" id={base} value={base} name="pizza-base" onChange={addBase} />
                <label htmlFor={base}>{base}</label>
              </div>
            )
          })}
          {newPizza.base && <OrangeButton nextPage={"/toppings"} text={"Next: Toppings"} />}
        </fieldset>
      </form>
    </div>
  );
}

export default Base;