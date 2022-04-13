import './About.scss';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../assets/animations/variants';
import aboutUsImg from '../../assets/images/about-us-img.jpg';

const About = () => {
  return (
    <motion.div className="about"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="about-text-box">
        <div className="about-us">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">Image evening evening. Given she'd dominion herb You'll them. Given whose, above. Place waters. Of give it winged above blessed every replenish multiply won't saying tree saying waters replenish. Tree give upon without them yielding him green. Image.</p>
          <p className="about-text">Under. Yielding, spirit. Dry saw two shall is they're kind seas be were first earth forth. The. And seas a given. From. Them you're darkness fill brought divide you're rule.</p>
        </div>
        <div className="our-mission">
          <h1 className="about-title">Our Mission</h1>
          <p className="about-text">Greater for days morning seasons you unto first. Seed spirit multiply air cattle beginning let, open blessed. Own midst divide be blessed him over green him.</p>
          <p className="about-text">Own in. Won't. Very spirit. Without forth Forth saw replenish image. And creature. Likeness, dominion female dominion she'd. Appear years dry us bring she'd together. Living fruit.</p>
        </div>
      </div>
      <img src={aboutUsImg} className="about-img" alt="An oven-baked pizza with pesto, rocket and buffalo mozzarella." />
    </motion.div>
  );
}

export default About;