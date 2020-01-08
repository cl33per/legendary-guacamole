import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "utils/setAuthToken"

import {setCurrentUser, logoutUser } from "actions/authActions"
import store from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/app.css";
import AdminLayout from "layouts/Admin";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "admin/login";
  }
}


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
        <Route path="/admin/" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashbaord"/>
    </Switch>
  </BrowserRouter>,
  </Provider>,
  document.getElementById("root")
);
