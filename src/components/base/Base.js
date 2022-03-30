import './Base.scss';
import OrangeButton from '../orangebtn/OrangeButton';

const Base = ({ setNewPizza, newPizza }) => {

  const bases = ['classic', 'thin', 'stuffed', 'chicago-style']

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
      <h1 className="base-title">Choose your base: </h1>
      <form>
        <fieldset>
          {bases.map((base, index) => {
            return (
              <div key={index}>
                <input type="radio" id={base} value={base} name="pizza-base" onChange={addBase} />
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