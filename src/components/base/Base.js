import './Base.scss';
import OrangeButton from '../orangebtn/OrangeButton';
import { useState } from 'react';

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
      <form>
        <fieldset className="choice-fieldset">
          <legend className="base-title fw-700">Choose your base:</legend>
          {bases.map((base, index) => {
            return (
              <div key={index} className="choice-input-container fw-500">
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