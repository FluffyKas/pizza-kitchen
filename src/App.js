import "./assets/global-styles/global-styles.scss";
import "./assets/global-styles/utilities.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import { AuthProvider } from "./context/AuthContext";
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

  const [newPizza, setNewPizza] = useState({ base: "", toppings: [] });

  return (
    <div className="App" data-theme={theme}>
      <AuthProvider>
        <Header theme={theme} setTheme={setTheme} />
        <AnimatePresence>
          <main>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home setNewPizza={setNewPizza} />} />
              <Route
                path="/base"
                element={<Base newPizza={newPizza} setNewPizza={setNewPizza} />}
              />
              <Route
                path="/toppings"
                element={
                  <Toppings newPizza={newPizza} setNewPizza={setNewPizza} />
                }
              />
              <Route
                path="/finish"
                element={<Finish newPizza={newPizza} theme={theme} />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </AnimatePresence>
      </AuthProvider>
    </div>
  );
}

export default App;
