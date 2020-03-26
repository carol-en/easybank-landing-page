import React, { Component } from 'react';
import "./home.scss";
import Articles from "./articles";
import Hero from "./hero";
import Why from "./why";

class Home extends Component {
  render() {
    return (
      <>
      <Hero />
      <Why />
      <Articles />
      </>
    )
  }
}

export default Home;
