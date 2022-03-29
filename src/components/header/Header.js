import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import closeBtn from '../../assets/images/icon-close.svg';
import './Header.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Header = () => {

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

  return (
    <header>
      <div className="header-inner-wrapper">

        <Link to="/" className="logo-container" aria-label="Pizza Kitchen">
          <img src={logo} alt="" aria-hidden="true" className="logo-img" />
          <span>Pizza Kitchen</span>
        </Link>

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
              <li><Link to="/contact" className="nav-menu-link">Contact</Link></li>
              <li><Link to="/about" className="nav-menu-link">About Us</Link></li>
            </ul>
          )}

        </nav>

      </div>
    </header>
  );
}

export default Header;