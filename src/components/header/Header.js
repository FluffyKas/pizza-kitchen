import './Header.scss';
import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import closeBtn from '../../assets/images/icon-close.svg';
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Header = ({ theme, setTheme }) => {

  // Theme Switcher
  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  //Mobile menu
  const [isOpened, setIsOpened] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpened(!isOpened)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, []);

  const navLinks = ['contact', 'about us', 'signup/login'];


  return (
    <header>
      <div className="header-inner-wrapper">

        <Link to="/" className="logo-container" aria-label="Pizza Kitchen">
          <img src={logo} alt="" aria-hidden="true" className="logo-img" />
          <span>Pizza Kitchen</span>
        </Link>

        <div className="header-left">
          <nav>

            <button className="hamburger-btn" aria-expanded={isOpened ? "true" : "false"} aria-controls="nav-menu" onClick={toggleMenu}>
              {
                isOpened ?
                  <img src={closeBtn} alt="" aria-hidden="true" /> :
                  <img src={hamburger} alt="" aria-hidden="true" />
              }
              <span className="sr-only">Menu</span>
            </button>

            {(isOpened || screenWidth > 640) && (
              <ul id="nav-menu" className="nav-menu uppercase">
                {navLinks.map((link, index) => {
                  return <li key={index}><Link to={`/${link}`} className="nav-menu-link fw-500">{link}</Link></li>
                })}
              </ul>
            )}

          </nav>

          <button onClick={switchTheme} title={`Switch to ${theme} theme`} aria-label={`Switch to ${theme} theme`} className="theme-toggle">
            {
              theme === 'dark' ?
                <img src={sunIcon} alt="" aria-hidden="true" /> :
                <img src={moonIcon} alt="" aria-hidden="true" />
            }

          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;