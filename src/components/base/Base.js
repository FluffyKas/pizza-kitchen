import './Base.scss';
import OrangeButton from '../orangebtn/OrangeButton';
import { motion } from 'framer-motion';
import { ingredientContainerVariants } from '../../assets/animations/variants';

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
    <motion.div className="base container"
      variants={ingredientContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="choice-title fw-700">Choose your pizza base:</motion.h1>
      <motion.form>
        <fieldset className="choice-fieldset">
          <legend className="sr-only">Available pizza bases</legend>
          {bases.map((base, index) => {
            return (
              <motion.div key={index} className="choice-input-container fw-500"
                whileHover={{ scale: 1.15, originX: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <input type="radio" id={base} value={base} name="pizza-base" onChange={addBase} />
                <label htmlFor={base}>{base}</label>
              </motion.div>
            )
          })}
          {newPizza.base && <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
          >
            <OrangeButton nextPage={"/toppings"} text={"Next: Toppings"} />
          </motion.div>}
        </fieldset>
      </motion.form>
    </motion.div>
  );
}

export default Base;