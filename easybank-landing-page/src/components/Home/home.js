import React, { Component } from 'react';
import "./home.scss";
import Articles from "./articles";
import Hero from "./hero";
import Why from "./why";

class Home extends Component {
  render() {
    return (
      <>
      <h1>Home Component</h1>
      <Hero />
      <Articles />
      <Why />
      </>
    )
  }
}

export default Home;
