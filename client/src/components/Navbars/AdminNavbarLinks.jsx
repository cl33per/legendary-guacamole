import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AdminNavbarLinks extends Component {

  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();  
    window.location.href = "login";
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    
    return (
      <div>
        <Nav>
          <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavDropdown eventKey={2} title="Helpful Links" id="basic-nav-dropdown-right">
            <MenuItem href="register" eventKey={2.1}>Register</MenuItem>
            <MenuItem href="login" eventKey={2.2}>Login</MenuItem>
            <MenuItem href="landing" eventKey={2.3}>Landing Page</MenuItem>
            <MenuItem href="calendar " eventKey={2.4}>Calendar</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="user"><i className="fa fa-user"/>Profile</NavItem>
          <NavItem id="logout" eventKey={3} onClick={this.onLogoutClick}>Log out</NavItem>
        </Nav>
      </div>
    );
  }
}

AdminNavbarLinks.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(AdminNavbarLinks);
