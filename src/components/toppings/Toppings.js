import OrangeButton from '../orangebtn/OrangeButton';
import './Toppings.scss';

const Toppings = ({ newPizza, setNewPizza }) => {

  const toppings = ['extra cheese', 'pepperoni', 'parma ham', 'mushrooms', 'black olives', 'bacon', 'sweetcorn', 'anchovies', 'pineapple', 'onions', 'bell pepper', 'fresh basil', 'baby spinach', 'rocket']

  const addToppings = (e) => {
    let chosenToppings;
    if (!newPizza.toppings.includes(e.target.value)) {
      chosenToppings = [...newPizza.toppings, e.target.value]
    } else {
      chosenToppings = newPizza.toppings.filter(topping => topping !== e.target.value);
    }
    setNewPizza({ ...newPizza, toppings: chosenToppings })
  }

  return (
    <div className="toppings container">
      <h1>Choose your Toppings:</h1>
      <form>
        <fieldset className="choice-fieldset">
          {toppings.map((topping, index) => {
            return (
              <div key={index} className="choice-input-container fw-500">
                <input type="checkbox" id={topping} value={topping} name={topping} onChange={addToppings} />
                <label htmlFor={topping}>{topping}</label>
              </div>
            )
          })}
          <OrangeButton nextPage={"/finish"} text={"Finish your order"} />
        </fieldset>
      </form>
    </div>
  );
}

export default Toppings;