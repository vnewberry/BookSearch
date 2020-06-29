import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Books from "./pages/Books";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
      </Switch>
    </Router>
  );
}

export default App;
