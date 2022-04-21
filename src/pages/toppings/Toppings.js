import { OrangeButton } from "../../components";
import "./Toppings.scss";
import { motion } from "framer-motion";
import { ingredientContainerVariants } from "../../assets/animations/variants";
import { usePizza } from "../../context";

export const Toppings = () => {
  const toppings = [
    "extra cheese",
    "pepperoni",
    "parma ham",
    "mushrooms",
    "black olives",
    "bacon",
    "sweetcorn",
    "anchovies",
    "pineapple",
    "onions",
    "bell pepper",
    "fresh basil",
    "baby spinach",
    "rocket",
  ];

  const { newPizza, setNewPizza } = usePizza();

  const addToppings = (e) => {
    let chosenToppings;
    if (!newPizza.toppings.includes(e.target.value)) {
      chosenToppings = [...newPizza.toppings, e.target.value];
    } else {
      chosenToppings = newPizza.toppings.filter(
        (topping) => topping !== e.target.value
      );
    }
    setNewPizza({ ...newPizza, toppings: chosenToppings });
  };

  return (
    <motion.div
      className="toppings container"
      variants={ingredientContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="choice-title fw-700">Choose your Toppings:</h1>
      <motion.form
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <fieldset className="choice-fieldset">
          {toppings.map((topping, index) => {
            return (
              <motion.div
                key={index}
                className="choice-input-container fw-500"
                whileHover={{ scale: 1.15, originX: 0 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                <input
                  type="checkbox"
                  id={topping}
                  value={topping}
                  name={topping}
                  onChange={addToppings}
                />
                <label htmlFor={topping}>{topping}</label>
              </motion.div>
            );
          })}
          {newPizza.toppings.length >= 3 ? (
            <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
              <OrangeButton nextPage={"/finish"} text={"Finish your order"} />
            </motion.div>
          ) : (
            <p className="toppings-alert">
              At least 3 toppings must be selected
            </p>
          )}
        </fieldset>
      </motion.form>
    </motion.div>
  );
};
