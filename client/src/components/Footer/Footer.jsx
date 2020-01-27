import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import logo from "assets/img/guaclogo.png";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://github.com/cl33per/legendary-guacamole">Github Repo</a>
              </li>
              <li>
                <Link to="company">About Family Ties</Link>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://github.com/cl33per/legendary-guacamole">
              Legendary-Guacamole <img className="guac-small" src={logo} alt="logo_image" />
            </a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
