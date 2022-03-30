import './Home.scss';
import OrangeButton from '../orangebtn/OrangeButton';

const Home = () => {

  return (
    <div className="home container flex flex-center text-center">
      <h1 className="home__title">Welcome to Pizza Kitchen</h1>
      <OrangeButton nextPage={"/base"} text={"Create your pizza"} />
    </div>
  );
}

export default Home;

