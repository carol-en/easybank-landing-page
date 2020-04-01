import React, { Component } from 'react';
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
    const wrap = `wrap ${active}`;
    const openX = `open-x ${navOpen && "close-x"}`;

    return(
      <nav onClick={this.toggleMobileNav}>
        <button className="logo-link">
          <span className="bank-logo" />
          <span className={openX} />
        </button>

        <div className={wrap}>
          <a  className="nav-link" href="https://google.com">Home</a>
          <a  className="nav-link" href="https://google.com">About</a>
          <a  className="nav-link" href="https://google.com">Contact</a>
          <a  className="nav-link" href="https://google.com">Blog</a>
          <a  className="nav-link" href="https://google.com">Careers</a>
        </div>

      </nav>
    )
  }
}

export default Nav;
