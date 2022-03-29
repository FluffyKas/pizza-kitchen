// import pizza from '../../assets/images/pizza.jpg';
import './Home.scss';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Pizza Place</h1>
      <Link to="/base" className="home-link">Create your pizza</Link>
    </div>
  );
}

export default Home;
