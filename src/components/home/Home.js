import './Home.scss';
import { Link } from "react-router-dom";
import OrangeButton from '../orangebtn/OrangeButton';

const Home = () => {

  return (
    <div className="home container flex flex-center text-center">
      <h1 className="home__title">Welcome to Pizza Kitchen</h1>
      <OrangeButton nextPage={"/toppings"} text={"Create your pizza"} />
    </div>
  );
}

export default Home;

