import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import credit_card from "../assets/img/guaclogo.png";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <img className="responsive-img guac-center credit-card" src={credit_card} alt="logo_image" />
                            <h4 className="flow-text text-center"> Welcome to Family Ties a {" "}<br />
                                <span style={{ fontFamily: "monospace" }}>MERN</span> stack
                        </h4>
                            <br />
                            <Col md={6}>
                                <h4 className="flow-text text-center" >About Family Ties</h4>
                                <p>Family Ties - an app designed by the team legendary-guacamole - is intended to function as a one-stop shop for family organization. It will have the following functionalities:
                                    </p>
                                    <ul>
                                    <li>A calendar which will keep track of family events;</li> 
                                    <li>Family profiles for each member of the family;</li>
                                    <li>A to-do list function which will have the ability to generate multiple lists;</li>
                                    <li>A meal-planning function which will also generate grocery lists;</li>
                                    <li>A record function, which will allow for the uploading and storing of images; and</li>
                                    <li>A chat function which will allow members of the group to talk each other, as well as members of other groups using the app.</li>
                                    </ul>
                                
                            </Col>
                            <Col md={6}>
                                <h4 className="flow-text text-center">Collaborators</h4>
                                <ul className="about-page-list">
                                    <li>Cody Leeper</li>
                                    <li>Aaron Mckoy</li>
                                    <li>Kate Laney</li>
                                </ul>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Login);
