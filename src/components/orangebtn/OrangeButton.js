import { Link } from "react-router-dom";
import './OrangeButton.scss';
import { motion } from 'framer-motion';

const OrangeButton = ({ nextPage, text }) => {
  return (
    <motion.div
      initial={{ x: "-20%" }}
      animate={{ x: 0 }}
    >
      <Link to={nextPage} className="orange-button">{text}</Link>
    </motion.div>
  );
}

export default OrangeButton;