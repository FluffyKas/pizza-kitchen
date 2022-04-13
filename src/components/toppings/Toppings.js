import OrangeButton from '../orangebtn/OrangeButton';
import './Toppings.scss';
import { motion } from 'framer-motion';
import { ingredientContainerVariants } from '../../assets/animations/variants';

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
    <motion.div className="toppings container"
      variants={ingredientContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="choice-title fw-700">Choose your Toppings:</h1>
      <form>
        <fieldset className="choice-fieldset">
          {toppings.map((topping, index) => {
            return (
              <motion.div key={index} className="choice-input-container fw-500"
                whileHover={{ scale: 1.15, originX: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <input type="checkbox" id={topping} value={topping} name={topping} onChange={addToppings} />
                <label htmlFor={topping}>{topping}</label>
              </motion.div>
            )
          })}
          {newPizza.toppings.length >= 3 ?
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
            ><OrangeButton nextPage={"/finish"} text={"Finish your order"} /></motion.div> :
            <p className="toppings-alert">At least 3 toppings must be selected</p>}
        </fieldset>
      </form>
    </motion.div>
  );
}

export default Toppings;