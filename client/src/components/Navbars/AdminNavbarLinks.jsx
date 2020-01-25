import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class AdminNavbarLinks extends Component {

  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();  
    window.location.href = "/";
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
            <MenuItem eventKey={2.1}><Link to="register">Register</Link></MenuItem>
            <MenuItem eventKey={2.2}><Link to="Login">Login</Link></MenuItem>
            <MenuItem eventKey={2.3}><Link to="landing">Landing Page</Link> </MenuItem>
            <MenuItem eventKey={2.4}><Link to="calendar">Calendar</Link></MenuItem>
          </NavDropdown>
          <Link to="user"><i className="fa fa-user"/>Profile</Link>
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
