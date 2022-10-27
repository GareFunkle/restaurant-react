import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nous Contactez</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La meilleure façon de se retrouver est de se perdre au service des autres.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Heure de Travail</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">08:00 H - 12:00 H</p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">07:00 H - 11:00 H</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
