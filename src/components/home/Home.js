import './Home.scss';
import OrangeButton from '../orangebtn/OrangeButton';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../assets/animations/variants';

const Home = ({ newPizza, setNewPizza }) => {

  const resetPizza = () => {
    setNewPizza({ base: '', toppings: [] })
  }

  return (
    <motion.div className="home flex text-center"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5, duration: .75 }}
      >
        <h1 className="home__title">Welcome to Pizza Kitchen</h1>
        <OrangeButton nextPage={"/base"} text={"Create your pizza"} onClick={resetPizza} />
      </motion.div>
    </motion.div>
  );
}

export default Home;

