import React, { Component } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RouterComponent from "./Components/RouterComponent";
import { BrowserRouter } from "react-router-dom";

import "./styles/app.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <RouterComponent />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
