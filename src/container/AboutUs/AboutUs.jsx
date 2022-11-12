import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">À Propos</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Notre Chef vous propose des produits frais, locaux et de qualité. Une
          grande terrasse vous accueille en été et en hiver tout au long de la
          journée.
        </p>
        <button type="button" className="custom__button">
          En savoir plus
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre Histoire</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Dans un cadre feutré et chaleureux, le Chef Kevin Luo raconte
          l'histoire culinaire de l’Italie, entre passé et présent, tradition et
          créativité et s'adonne à son art pour proposer l'excellence de son
          pays natal.
        </p>
        <button type="button" className="custom__button">
          Découvrir
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
