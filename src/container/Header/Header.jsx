import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Dégustez des nouvelles saveurs" />
      <h1 className="app__header-h1">Notre nouvelle carte</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Notre restaurant vous invite à un voyage culinaire en Italie. Partagez
        entre amis notre délicieuse pizza Margherita ou notre Risotto accompagné
        d'un bon vin du pays.{" "}
      </p>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Finissez votre voyage en choisissant parmi nos succulents desserts maison. Toute l'équipe vous attend pour partager un agréable moment.{" "}
      </p>
      
      
      <button type="button" className="custom__button">
      Découvrir 
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
