import './assets/global-styles/global-styles.scss';
import './assets/global-styles/utilities.scss';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Home from './components/home/Home';
import Base from './components/base/Base';
import Toppings from './components/toppings/Toppings';
import Finish from './components/finish/Finish';
import RatingCard from './components/rating-card/RatingCard';
import ThankYouCard from './components/thank-you-card/ThankYouCard';
import Header from './components/header/Header';
import ContactPage from './components/contactpage/ContactPage';

function App() {

  const [newPizza, setNewPizza] = useState({ base: '', toppings: [] });

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home newPizza={newPizza} setNewPizza={setNewPizza} />} />
          <Route path="/base" element={<Base newPizza={newPizza} setNewPizza={setNewPizza} />} />
          <Route path="/toppings" element={<Toppings newPizza={newPizza} setNewPizza={setNewPizza} />} />
          <Route path="/finish" element={<Finish newPizza={newPizza} />} />
          <Route path="/rating" element={<RatingCard />} />
          <Route path="/thankyou" element={<ThankYouCard />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
