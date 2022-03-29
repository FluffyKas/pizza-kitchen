import RatingCard from './components/rating-card/RatingCard';
import Home from './components/home/Home';
import './assets/global-styles/global-styles.scss';
import { Routes, Route } from "react-router-dom";
import Base from './components/base/Base';
import Toppings from './components/toppings/Toppings';
import Finish from './components/finish/Finish';
import ThankYouCard from './components/thank-you-card/ThankYouCard';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/rating" element={<RatingCard />} />
          <Route path="/thankyou" element={<ThankYouCard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
