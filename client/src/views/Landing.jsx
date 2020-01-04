import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import credit_card from "../assets/img/guaclogo.png";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import Button from "components/CustomButton/CustomButton.jsx";

class Login extends Component {
    componentDidMount() {
        // If logged in, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/dashboard");
        }
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                    <Col md={4}></Col>
                        <Col md={4}>
                            <img className="responsive-img guac-center credit-card" src={credit_card} alt="logo_image" />
                        <h4 className="flow-text text-center"> Welcome to Family Ties a {" "}<br />
                            <span style={{ fontFamily: "monospace" }}>MERN</span> stack
                        </h4>
                        <br />
                            <Col className="no-padding" md={6}>
                                <Button bsStyle="primary" fill  href="/register">Register</Button>
                            </Col>
                            <Col className="no-padding" md={6}>
                                <Button bsStyle="primary" pullRight fill   href="/login">Login</Button>
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
