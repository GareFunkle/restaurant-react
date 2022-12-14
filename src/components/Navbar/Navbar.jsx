import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#"><img src={images.gericht} alt="app logo" /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#about">A propos</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Carte</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Prix</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Connexion / S'inscrire
        </a>
        <div />
        <a href="/" className="p__opensans">
          Réserver
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Accueil</a>
              </li>
              <li className="p__opensans">
                <a href="#about">A propos</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Carte</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Prix</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
