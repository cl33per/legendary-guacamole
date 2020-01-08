import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Register Account"
                                content={
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <FormInputs
                                            ncols={["col-md-3", "col-md-3", "col-md-3","col-md-3"]}
                                            properties={[{
                                                    label: "Name",
                                                    type: "text",
                                                    id: 'name',
                                                    bsClass: "form-control",
                                                    placeholder: "Full Name",
                                                    onChange: this.onChange,
                                                    value: this.state.name,
                                                    error:errors.name,
                                                    className: classnames("", {invalid: errors.name})
                                                },
                                                {
                                                    label: "Email",
                                                    type: "email",
                                                    id: 'email',
                                                    bsClass: "form-control",
                                                    placeholder: "Email Address",
                                                    onChange: this.onChange,
                                                    value: this.state.email,
                                                    error: errors.email,
                                                    className: classnames("", { invalid: errors.email })
                                                },
                                                {
                                                    label: "Password",
                                                    type: "password",
                                                    id: 'password',
                                                    bsClass: "form-control",
                                                    placeholder: "Password",
                                                    onChange: this.onChange,
                                                    value: this.state.password,
                                                    error: errors.password,
                                                    className: classnames("", { invalid: errors.password })
                                                },
                                                {
                                                    label: "Confirm Password",
                                                    type: "password",
                                                    id: "password2",
                                                    bsClass: "form-control",
                                                    placeholder: "Confirm Password",
                                                    onChange: this.onChange,
                                                    value: this.state.password2,
                                                    error: errors.password2,
                                                    className: classnames("", { invalid: errors.password2 })
                                                }
                                            ]}
                                        />
                                        <Button bsStyle="primary" pullRight fill type="submit">Register</Button>
                                        <div className="clearfix" />
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>  
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
