import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Homepage";
import FunStuff from "./FunStuff";
import Proper from "./Proper";
import AboutUs from "./AboutUs";

export default function RouterComponent() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/funstuff">
        <FunStuff />
      </Route>
      <Route path="/proper">
        <Proper />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
    </Switch>
  );
}
