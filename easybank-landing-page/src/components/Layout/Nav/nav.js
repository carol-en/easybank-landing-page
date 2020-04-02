import React, { Component } from 'react';
import Button from "./button";
import Navigation from "./navigation";
// import { Link } from "react-router-dom";
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
      const desktop = window.innerWidth >= 900;
  
      if(mobile) {
        this.setState({ navOpen: false });
      } else if(desktop) {
        this.setState({ navOpen: true });
      }
    });
  }
 
  toggleMobileNav = (event) => { 
    const mobile = window.innerWidth < 900;
    const desktop = window.innerWidth >= 900;
    if(mobile) {
      this.setState({ navOpen:!this.state.navOpen });
    } else if(desktop) {
        window.location= "/";
    }
  }

  render() {
    const { navOpen } = this.state;
    const active= navOpen ? "active" : undefined;
    const openX = `open-x ${navOpen && "close-x"}`;

    return(
      <header>
          <Button toggleMobileNav={this.toggleMobileNav} openX= {openX}/>
          <Navigation active={active} toggleMobileNav={this.toggleMobileNav} />
          <button className="gradient-btn">Request Invite</button>
      </header>
    )
  }
}

export default Nav;
