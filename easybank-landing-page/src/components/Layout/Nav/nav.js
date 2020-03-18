import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import CloseIcon from "./images/icon-close.svg";
import "./nav.scss";

class Nav extends Component {
  render() {
    return(
      <nav>
      <button className="logo-link">
        <img src={Logo} alt="Easy Bank"/>
        <img src={CloseIcon} alt="Close Navigation"/>
      </button>
      <a  className="nav-link" href="#">Home</a>
      <a  className="nav-link" href="#">About</a>
      <a  className="nav-link" href="#">Contact</a>
      <a  className="nav-link" href="#">Blog</a>
      <a  className="nav-link" href="#">Careers</a>

      <button>Request Invite</button>
      </nav>
    )
  }
}

export default Nav;
