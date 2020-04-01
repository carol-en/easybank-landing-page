import React, { Component } from 'react';
import "./footer.scss";
import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconPinterest from "./images/icon-pinterest.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconYoutube from "./images/icon-youtube.svg";
class Footer extends Component {
  render() {
    return(
      <footer>
        <span className="logo" />
        <aside className="social-medias">
          <a href="https://facebook.com"><img src={iconFacebook} alt="Facebook" /></a>
          <a href="https://youtube.com"><img src={iconYoutube} alt="Youtube"/></a>
          <a href="https://twitter.com"><img src={iconTwitter} alt="Twitter"/></a>
          <a href="https://pinterest.com"><img src={iconPinterest} alt="Pinterest"/></a>
          <a href="https://instagram.com"><img src={iconInstagram} alt="Instagram"/></a>
        </aside>

        {/* https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/3 */}
          About Us
          Contact
          Blog
          Careers
          Support
          Privacy Policy

          Request Invite

          © Easybank. All Rights Reserved
      </footer>
    )
  }
}

export default Footer;
