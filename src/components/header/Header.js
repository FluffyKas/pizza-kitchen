import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import moonIcon from "../../assets/images/icon-moon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { useTheme } from "../../context";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  //Logout
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogOut() {
    setError("");

    try {
      await logout();
    } catch {
      setError("failed to log out");
    }
  }

  // Theme Switcher
  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  //Mobile menu
  const [isOpened, setIsOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  //Closing mobile menu when clicking outside of it

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mosuedown", handler);
    };
  });

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeIn" }}
    >
      <div className="header-inner-wrapper">
        <Link to="/" className="logo-container" aria-label="Pizza Kitchen">
          <img src={logo} alt="" aria-hidden="true" className="logo-img" />
          {screenWidth > 375 && <span>Pizza Kitchen</span>}
        </Link>

        <div className="header-left" ref={menuRef}>
          <nav>
            <button
              className="hamburger-btn"
              aria-expanded={isOpened ? "true" : "false"}
              aria-controls="nav-menu"
              onClick={toggleMenu}
            >
              {isOpened ? (
                <img
                  className="menu-icon"
                  src={closeBtn}
                  alt=""
                  aria-hidden="true"
                />
              ) : (
                <img
                  className="menu-icon"
                  src={hamburger}
                  alt=""
                  aria-hidden="true"
                />
              )}
              <span className="sr-only">Menu</span>
            </button>

            {(isOpened || screenWidth > 960) && (
              <motion.ul
                id="nav-menu"
                className="nav-menu uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "linear", ease: "easeInOut" }}
              >
                <li>
                  <Link to="/contact" className="nav-menu-link fw-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="about" className="nav-menu-link fw-500">
                    About Us
                  </Link>
                </li>
                {currentUser && (
                  <li className="signed-in-as fw-500">
                    Signed in as {currentUser.email}
                  </li>
                )}
                {!currentUser && (
                  <li>
                    <Link to="/login" className="nav-menu-link fw-500">
                      Signup/Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li>
                    <button
                      className="nav-menu-link logout-btn fw-500"
                      onClick={handleLogOut}
                    >
                      Log out
                    </button>
                  </li>
                )}
                {error}
              </motion.ul>
            )}
          </nav>

          <button
            onClick={switchTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } theme`}
            className="theme-toggle"
          >
            {theme === "dark" ? (
              <img src={sunIcon} alt="" aria-hidden="true" />
            ) : (
              <img src={moonIcon} alt="" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
};
