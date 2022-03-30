import OrangeButton from '../orangebtn/OrangeButton';

const Toppings = () => {

  const toppings = ['extra cheese', 'pepperoni', 'parma ham', 'mushrooms', 'black olives', 'bacon', 'sweetcorn', 'anchovies', 'pineapple', 'onions', 'bell pepper', 'fresh basil', 'baby spinach', 'rocket']

  const addToppings = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="toppings container">
      <h1>Choose your Toppings:</h1>
      <form>
        <fieldset>
          {toppings.map((topping, index) => {
            return (
              <div key={index}>
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