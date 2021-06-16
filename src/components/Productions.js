import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetProduct from "./GetProduct";
export default function Productions() {
  return (
    <Router>
      <div>
       <h1>Our productins</h1>
        <ul>
          <li>
            <Link to="/productions/Clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/productions/Shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/productions/Food">Food</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/productions/Clothes">
          <h2>Clothes</h2>
          <GetProduct></GetProduct>
        </Route>
        <Route path="/productions/Shoes">
          <h2>Shoes</h2>
          <GetProduct></GetProduct>
        </Route>
        <Route path="/productions/Food">
          <h2>Food</h2>
          <GetProduct></GetProduct>
        </Route>
      </Switch>
    </Router>
  );
}
