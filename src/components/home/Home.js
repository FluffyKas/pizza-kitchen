import './Home.scss';
import OrangeButton from '../orangebtn/OrangeButton';

const Home = ({ newPizza, setNewPizza }) => {

  const resetPizza = () => {
    setNewPizza({ base: '', toppings: [] })
  }

  return (
    <div className="home flex text-center">
      <div className="container">
        <h1 className="home__title">Welcome to Pizza Kitchen</h1>
        {<OrangeButton nextPage={"/base"} text={"Create your pizza"} onClick={resetPizza} />}
      </div>
    </div>
  );
}

export default Home;

