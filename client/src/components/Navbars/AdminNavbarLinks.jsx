import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
class AdminNavbarLinks extends Component {

  // Logout
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();  
    window.location.href = "/";
  }
  onMenuClick = (id) =>{
    switch(id){
      case "register": 
        break;
      default:;
    }
  }
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavDropdown eventKey={2} title="Helpful Links" id="basic-nav-dropdown-right">           
            <LinkContainer to="register"><MenuItem eventKey={2.1}>Register</MenuItem></LinkContainer>
            <LinkContainer to="Login"><MenuItem eventKey={2.2}>Login</MenuItem></LinkContainer>
            <LinkContainer to="landing"><MenuItem eventKey={2.3}>Landing Page</MenuItem></LinkContainer>
            <LinkContainer to="calendar"><MenuItem eventKey={2.4}>Calendar</MenuItem></LinkContainer>
          </NavDropdown>
          <LinkContainer to="user"><NavItem eventKey={3}><i className="fa fa-user" />Profile</NavItem></LinkContainer>
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
