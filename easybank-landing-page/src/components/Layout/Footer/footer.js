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


        <ul className="site-map">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Support</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>

        <button className="gradient-btn">Request Invite</button>
          <p className="copyright">© Easybank. All Rights Reserved</p>
      </footer>
    )
  }
}

export default Footer;
