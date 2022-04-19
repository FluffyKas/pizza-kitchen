import "./assets/global-styles/global-styles.scss";
import "./assets/global-styles/utilities.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { AuthProvider, PizzaProvider } from "./context";
import { AnimatePresence } from "framer-motion";
import {
  Home,
  About,
  Base,
  ContactPage,
  Finish,
  ForgotPassword,
  Login,
  SignUp,
  Toppings,
} from "./pages";
import { Header } from "./components";

function App() {
  const location = useLocation();

  const defaultDark = window.matchMedia("(perfers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <div className="App" data-theme={theme}>
      <AuthProvider>
        <PizzaProvider>
          <Header theme={theme} setTheme={setTheme} />
          <AnimatePresence>
            <main>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/base" element={<Base />} />
                <Route path="/toppings" element={<Toppings />} />
                <Route path="/finish" element={<Finish theme={theme} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
          </AnimatePresence>
        </PizzaProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
