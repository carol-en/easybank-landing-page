import React, { Component } from 'react';
import "./footer.scss";
import { logo } from "./images";

class Footer extends Component {
  render() {
    return(
      <footer>
        <span className="logo" />
        <aside className="social-medias">
          <a href="/"><img src={`${logo}.svg`} /></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
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
