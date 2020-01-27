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
    return (
      <div>
        <Nav pullRight>
          <NavDropdown eventKey={2} title="Helpful Links" id="basic-nav-dropdown-right">           
            <MenuItem eventKey={2.1}><Link to="register">Register</Link></MenuItem>
            <MenuItem eventKey={2.2}><Link to="Login">Register</Link></MenuItem>
            <MenuItem eventKey={2.3}><Link to="landing">Landing Page</Link></MenuItem>
            <MenuItem eventKey={2.4}><Link to="calendar">Calendar</Link>Calendar</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3}><i className="fa fa-user" /><Link to="user">Profile</Link></NavItem>
          <NavItem id="logout" eventKey={3} onClick={this.onLogoutClick}>Logout</NavItem>
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
