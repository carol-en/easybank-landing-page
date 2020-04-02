import React, { Component } from 'react';

class Navigation extends Component {
    render() {
      const {toggleMobileNav, active} = this.props;
      return (
        <nav className={active} onClick={toggleMobileNav}>
          <div className="wrap">
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

  export default Navigation;