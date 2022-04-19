import { useContext, createContext } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const defaultDark = window.matchMedia("(perfers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
