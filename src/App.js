import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/Productions";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
         
          <li>
            <Link to="/productions">Production</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/">
            <div></div>
          </Route>
          <Route path="/productions">
            <About></About>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
