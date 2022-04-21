import "./Base.scss";
import { OrangeButton } from "../../components";
import { motion } from "framer-motion";
import { ingredientContainerVariants } from "../../assets/animations/variants";
import { usePizza } from "../../context";

export const Base = () => {
  const bases = ["classic", "thin", "stuffed", "chicago-style"];
  const { setNewPizza, newPizza } = usePizza();

  const addBase = (e) => {
    setNewPizza({
      ...newPizza,
      base: e.target.value,
    });
  };

  return (
    <motion.div
      className="base container"
      variants={ingredientContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="choice-title fw-700">
        Choose your pizza base:
      </motion.h1>
      <motion.form
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <fieldset className="choice-fieldset">
          <legend className="sr-only">Available pizza bases</legend>
          {bases.map((base, index) => {
            return (
              <motion.div
                key={index}
                className="choice-input-container fw-500"
                whileHover={{ scale: 1.15, originX: 0 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <input
                  type="radio"
                  id={base}
                  value={base}
                  name="pizza-base"
                  onChange={addBase}
                />
                <label htmlFor={base}>
                  {base.charAt(0).toUpperCase() + base.slice(1)}
                </label>
              </motion.div>
            );
          })}
          {newPizza.base && (
            <motion.div initial={{ x: 200 }} animate={{ x: 0 }}>
              <OrangeButton nextPage={"/toppings"} text={"Next: Toppings"} />
            </motion.div>
          )}
        </fieldset>
      </motion.form>
    </motion.div>
  );
};
