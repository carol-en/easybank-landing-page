import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import CloseIcon from "./images/icon-close.svg";
import "./nav.scss";

class Nav extends Component {

  state = {
    navOpen: null
  }

  componentDidMount() {
    this.setState({ navOpen: false });
  }

  toggleMobileNav = () => { 
   this.setState({ navOpen:!this.state.navOpen });
  }

  render() {
    const { navOpen } = this.state;
    const active= navOpen && "active";
    const navLink = `nav-link ${active}`;
    const gradientBtn = `gradient-btn ${active}`;

    return(
      <nav onClick={this.toggleMobileNav}>
        <button className="logo-link">
          <img src={Logo} alt="Easy Bank"/>
          <img src={CloseIcon} alt="Close Navigation"/>
        </button>
        
        <a  className={navLink} href="#">Home</a>
        <a  className={navLink} href="#">About</a>
        <a  className={navLink} href="#">Contact</a>
        <a  className={navLink} href="#">Blog</a>
        <a  className={navLink} href="#">Careers</a>

        <button className={gradientBtn}>Request Invite</button>
      </nav>
    )
  }
}

export default Nav;
