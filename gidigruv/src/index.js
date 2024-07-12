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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/not-available" element={<NotAvailable />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/category-page" element={<CategoryPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/showeventdetails" element={<SED />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

serviceWorker.unregister();
