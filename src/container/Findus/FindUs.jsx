import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Nous rencontrer
      </h1>
      <div className="app__wrapper-content">
        {/* <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p> */}
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Horaire d’ouverture
        </p>
        <p className="p__opensans">Lun - Ven: 10:00 H - 14:00 H</p>
        <p className="p__opensans">Sam - Dim: 10:00 H - 15:00 H</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        {" "}
        En Savoir Plus
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
