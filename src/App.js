import "./assets/global-styles/global-styles.scss";
import "./assets/global-styles/utilities.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider, PizzaProvider, useTheme } from "./context";
import { AnimatePresence } from "framer-motion";
import { AppRoutes } from "./pages";
import { Header } from "./components";

function App() {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className="App" data-theme={theme}>
      <AuthProvider>
        <PizzaProvider>
          <Header />
          <AnimatePresence>
            <main>
              <Routes location={location} key={location.pathname}>
                {AppRoutes.map((route, index) => {
                  const { path, element } = route;
                  return <Route path={path} element={element} />;
                })}
              </Routes>
            </main>
          </AnimatePresence>
        </PizzaProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
