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
    // this.setState({ navOpen: false });
    this.setLayout();
  }

  setLayout = () => {
    window.addEventListener("resize", () => {
      const mobile = window.innerWidth < 900;
      const desktop = window.innerWidth > 900;
  
      if(mobile) {
        this.setState({ navOpen: false });
      } else if(desktop) {
        this.setState({ navOpen: true });
      }
    });
  }
 
  toggleMobileNav = () => { 
    const mobile = window.innerWidth < 900;
    if(mobile) {
      this.setState({ navOpen:!this.state.navOpen });
    }
  }

  render() {
    const { navOpen } = this.state;
    const active= navOpen && "active";
    const navLink = `nav-link ${active}`;
    const gradientBtn = `gradient-btn ${active}`;

    return(
      <nav onClick={this.toggleMobileNav}>
        <button className="logo-link">
          <img className="bank-logo" src={Logo} alt="Easy Bank"/>
          <img className="close-x" src={CloseIcon} alt="Close Navigation"/>
        </button>
        
        <a  className={navLink} href="https://google.com">Home</a>
        <a  className={navLink} href="https://google.com">About</a>
        <a  className={navLink} href="https://google.com">Contact</a>
        <a  className={navLink} href="https://google.com">Blog</a>
        <a  className={navLink} href="https://google.com">Careers</a>

        <button className={gradientBtn}>Request Invite</button>
      </nav>
    )
  }
}

export default Nav;
