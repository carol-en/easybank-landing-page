import React, { Component } from 'react';
import "./root.scss";
import { Nav, Footer } from "./Layout";
import Home from "./Home";

class Root extends Component {
render() {
  return (
    <>
    <Nav />
    <Home />
    <Footer />
    </>
  )
}
}

export default Root;
