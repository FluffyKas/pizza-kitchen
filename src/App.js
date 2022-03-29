import './assets/global-styles/global-styles.scss';
import './assets/global-styles/utilities.scss';
import { Routes, Route } from "react-router-dom";

import Home from './components/home/Home';
import Base from './components/base/Base';
import Toppings from './components/toppings/Toppings';
import Finish from './components/finish/Finish';
import RatingCard from './components/rating-card/RatingCard';
import ThankYouCard from './components/thank-you-card/ThankYouCard';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
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
