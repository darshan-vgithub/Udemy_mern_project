import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Redirect path="/" />
      </Switch>
    </Router>
  );
};

export default App;
