import React, { Component } from 'react';
import "./home.scss";

class Hero extends Component {
  render() {
    return(
      <section className="hero">
        <header className="hero-images">
          <aside className="inner-header"></aside>
        </header>
        <aside className="blurb">

          <h1 className="lead">Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <button className="gradient-btn">Request Invite</button>

        </aside>
      </section>
    )
  }
}

export default Hero;
