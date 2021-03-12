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
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
