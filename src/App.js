import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";

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
      <div className="hero">
        <p>Your favorite food delivered while you code!</p>
        <Link to="INSERTORDERPAGE">Order</Link>
      </div>
      <Switch>
        
      </Switch>
    </div> //ends app wrapper
  );
};
export default App;
