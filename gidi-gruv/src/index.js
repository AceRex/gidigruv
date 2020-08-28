import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import LiveNow from './liveNowPage'
import Coming from './upcomingEvents'

import "./App.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/livenow" component={LiveNow} />
      <Route path="/coming" component={Coming} />

    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
