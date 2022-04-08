import './assets/global-styles/global-styles.scss';
import './assets/global-styles/utilities.scss';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { AuthProvider } from './context/AuthContext'

import Header from './components/header/Header';
import Home from './components/home/Home';
import Base from './components/base/Base';
import Toppings from './components/toppings/Toppings';
import Finish from './components/finish/Finish';
import ContactPage from './components/contactpage/ContactPage';
import About from './components/about/About';
import Login from './components/user/login/Login';
import SignUp from './components/user/signup/Signup';

function App() {

  const defaultDark = window.matchMedia('(perfers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [newPizza, setNewPizza] = useState({ base: '', toppings: [] });

  return (
    <div className="App" data-theme={theme}>
      <AuthProvider>
        <Header theme={theme} setTheme={setTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home newPizza={newPizza} setNewPizza={setNewPizza} />} />
            <Route path="/base" element={<Base newPizza={newPizza} setNewPizza={setNewPizza} />} />
            <Route path="/toppings" element={<Toppings newPizza={newPizza} setNewPizza={setNewPizza} />} />
            <Route path="/finish" element={<Finish newPizza={newPizza} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
