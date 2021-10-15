import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Lambda Eats</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Help</Link>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div> //ends app wrapper
  );
};
export default App;
