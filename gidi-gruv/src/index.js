import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Switch,
} from "react-router-dom";
import App from "./App";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import SignIn from "./Sign/SignIn";
import Register from "./Sign/register";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <App/>
      </Route>
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />          
  </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
