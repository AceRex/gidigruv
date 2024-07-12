import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Routes,
} from "react-router-dom";
import App from "./App";
import AboutUs from "./About/About";
import SED from "./showEventDetails/SED";
import SignIn from "./Sign/SignIn";
import Register from "./Sign/register";
import Dashboard from "./dashboard/dashboard";
import NotAvailable from "./NotAvailable";
import CreateEvent from "./createEvent/createEvent";
import CategoryPage from "./categoryPage/categoryPage";
import "./App.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" exact component={App} />
      {/* <Route path="/about" component={AboutUs} /> */}
      {/* <Route path="/signin" component={SignIn} /> */}
      {/* <Route path="/not-available" component={NotAvailable} /> */}
      {/* <Route path="/create-event" component={CreateEvent} /> */}
      {/* <Route path="/category-page" component={CategoryPage} /> */}
      {/* <Route path="/register" component={Register} /> */}
      {/* <Route path="/showeventdetails" component={SED} /> */}
      {/* <Route path="/dashboard" component={Dashboard} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
