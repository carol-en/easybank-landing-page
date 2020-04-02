import React, { Component } from 'react';

class Button extends Component {
    render() {
      const {toggleMobileNav, openX} = this.props;
      return (
        <button className="logo-link" onClick={toggleMobileNav}>
          <span className="bank-logo" />
          <span className={openX} />
        </button>
      )
    }
  }

  export default Button;

