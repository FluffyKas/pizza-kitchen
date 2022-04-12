import './About.scss';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../assets/animations/variants';

const About = () => {
  return (
    <motion.div className="about container"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="about-title">About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt deleniti suscipit, quo voluptate voluptas accusamus consectetur tempora aperiam quam ut pariatur facilis iusto sequi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi voluptas, laborum nesciunt iste necessitatibus esse deleniti facere voluptate. Perspiciatis fuga, possimus asperiores nesciunt tempore maiores dolorem perferendis? Laborum quam maiores magnam tempora est aliquid odio optio saepe nulla voluptatum?</p>
    </motion.div>
  );
}

export default About;