import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import CloseIcon from "./images/icon-close.svg";
import "./nav.scss";

class Nav extends Component {

  navRef = React.createRef();

  componentDidMount() {
    console.log("Loaded");
  }

  clickBtn = (event) => {
   console.log(event.target);  
  }

  render() {
    return(
      <nav ref={this.navRef} onClick={this.clickBtn}>
      <button className="logo-link">
        <img src={Logo} alt="Easy Bank"/>
        <img src={CloseIcon} alt="Close Navigation"/>
      </button>
      <a  className="nav-link" href="#">Home</a>
      <a  className="nav-link" href="#">About</a>
      <a  className="nav-link" href="#">Contact</a>
      <a  className="nav-link" href="#">Blog</a>
      <a  className="nav-link" href="#">Careers</a>

      <button className="gradient-btn">Request Invite</button>
      </nav>
    )
  }
}

export default Nav;
