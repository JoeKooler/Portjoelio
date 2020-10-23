import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouterComponent from "./Components/RouterComponent";

import "./styles/app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RouterComponent />
        <Footer />
      </div>
    );
  }
}
