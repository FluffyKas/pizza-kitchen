import { Link } from "react-router-dom";
import "./OrangeButton.scss";
import { motion } from "framer-motion";

export const OrangeButton = ({ nextPage, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
      <Link to={nextPage} className="orange-button">
        {text}
      </Link>
    </motion.div>
  );
};
