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
    window.location.href = "/";
  }

  //href link solutions...not perfect
  navBarLinksClick = id => {
    switch(id){
      case "register": window.location.href = "register"
      break;
      case "login": window.location.href = "login"
      break;
      case "landing": window.location.href = "landing"
      break;
      case "calendar": window.location.href = "calendar"
      break;
      case "profile": window.location.href = "user"
      break;
      default:
    }
  
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
            <MenuItem id="register" eventKey={2.1} onClick={() => this.navBarLinksClick("register")}>Register</MenuItem>
            <MenuItem id="login" eventKey={2.2} onClick={() => this.navBarLinksClick("login")}>Login</MenuItem>
            <MenuItem id="landing" eventKey={2.3} onClick={() => this.navBarLinksClick("landing")}>Landing Page</MenuItem>
            <MenuItem id="calendar" eventKey={2.4} onClick={() => this.navBarLinksClick("calendar")}>Calendar</MenuItem>
          </NavDropdown>
          <NavItem id="profile" eventKey={3} onClick={() => this.navBarLinksClick("profile")}><i className="fa fa-user" />Profile</NavItem>
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
