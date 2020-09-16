import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import LiveNow from './LiveNow/liveNowPage'
import Coming from './upcomingEvents/upcomingEvents'
import AboutUs from './About'
import PreviewPage from './preview/preview'
import SignIn from './Sign/SignIn'
import Register from './Sign/register'
import Dashboard from './dashboard/dashboard'

import "./App.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/livenow" component={LiveNow} />
      <Route path="/coming" component={Coming} />
      <Route path="/about" component={AboutUs} />
      <Route path="/showevent" component={PreviewPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />






    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
