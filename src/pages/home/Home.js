import "./Home.scss";
import { OrangeButton } from "../../components";
import { motion } from "framer-motion";
import { pageAnimation } from "../../assets/animations/variants";
import { useEffect } from "react";

export const Home = ({ setNewPizza }) => {
  useEffect(() => {
    setNewPizza({ base: "", toppings: [] });
  }, []);

  return (
    <motion.div
      className="home flex text-center"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <h1 className="home__title">Welcome to Pizza Kitchen</h1>
        <OrangeButton nextPage={"/base"} text={"Create your pizza"} />
      </motion.div>
    </motion.div>
  );
};
