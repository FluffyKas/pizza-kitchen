import { Link } from "react-router-dom";

const Toppings = () => {

  const toppings = ['extra cheese', 'pepperoni', 'parma ham', 'mushrooms', 'black olives', 'bacon', 'sweetcorn', 'anchovies', 'pineapple', 'onions', 'bell pepper', 'fresh basil', 'baby spinach', 'rocket']

  return (
    <div>
      <h1>Choose your Toppings:</h1>
      <form>
        <fieldset>
          {toppings.map((topping) => {
            return (
              <div>
                <input type="checkbox" id={topping} value={topping} name={topping} />
                <label htmlFor={topping}>{topping}</label>
              </div>
            )
          })}
          <Link to="/finish">Finish your order</Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Toppings;