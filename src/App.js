import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to="/">
        <h1>Lambda Eats</h1>
      </Link>
      <div className="header">
        <p>Your favorite food delivered while you code!</p>
        <Link to="INSERTORDERPAGE">Order</Link>
      </div>
    </>
  );
};
export default App;
