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
            username: "",
            password: "",
            email: "",
            profile: {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                birthday: "",
                // avatar: "",
                // bio: "",
                address: {
                    streetOne: "",
                    streetTwo: "",
                    city: "",
                    state: "",
                    country: "",
                    zipcode: ""
                }
            },
            passwordConfirm: "",
            errors: {}
        }
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
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            profile: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                birthday: this.state.birthday,
                // avatar: this.state.avatar,
                // bio: this.state.bio,
                address: {
                    streetOne: this.state.streetOne,
                    streetTwo: this.state.streetTwo,
                    city: this.state.city,
                    state: this.state.addressState,
                    country: this.state.country,
                    zipcode: this.state.zipcode
                }
            },
            passwordConfirm: this.state.passwordConfirm
        }
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="New Account Registration"
                                content={
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <FormInputs
                                            ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                                            properties={[
                                                {
                                                    label: "Username",
                                                    type: "text",
                                                    id: 'username',
                                                    bsClass: "form-control",
                                                    placeholder: "User Name",
                                                    onChange: this.onChange,
                                                    value: this.state.username,
                                                    error: errors.username,
                                                    className: classnames("", { invalid: errors.username })
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
                                                    id: "passwordConfirm",
                                                    bsClass: "form-control",
                                                    placeholder: "Confirm Password",
                                                    onChange: this.onChange,
                                                    value: this.state.passwordConfirm,
                                                    error: errors.passwordConfirm,
                                                    className: classnames("", { invalid: errors.passwordConfirm })
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-2", "col-md-2", "col-md-2", "col-md-2", "col-md-2", "col-md-2"]}
                                            properties={[{
                                                    label:"Address",
                                                    type:"text",
                                                    id:"streetOne",
                                                    bsClass:"form-control",
                                                    onChange:this.onChange,
                                                    value: this.state.streetOne,
                                                    error: errors.streetOne,
                                                    className: classnames("", { invalid: errors.streetOne })
                                                },
                                                {
                                                    label: "Address 2",
                                                    type: "text",
                                                    id: "streetTwo",
                                                    bsClass: "form-control",
                                                    onChange: this.onChange,
                                                    value: this.state.streetTwo,
                                                    error: errors.streetTwo,
                                                    className: classnames("", { invalid: errors.streetTwo })
                                                },
                                                {
                                                    label: "City",
                                                    type: "text",
                                                    id: "city",
                                                    bsClass: "form-control",
                                                    onChange: this.onChange,
                                                    value: this.state.city,
                                                    error: errors.city,
                                                    className: classnames("", { invalid: errors.city })
                                                },
                                                {
                                                    label: "State",
                                                    type:"text",
                                                    id: "addressState",
                                                    bsClass: "form-control",
                                                    onChange: this.onChange,
                                                    value: this.state.addressState,
                                                    error: errors.addressState,
                                                    className: classnames("", { invalid: errors.addressState })
                                                },
                                                {
                                                    label: "Country",
                                                    type: "text",
                                                    id: "country",
                                                    bsClass: "form-control",
                                                    onChange: this.onChange,
                                                    value: this.state.country,
                                                    error: errors.country,
                                                    className: classnames("", { invalid: errors.country })
                                                },
                                                {
                                                    label: "Zipcode",
                                                    type: "text",
                                                    id: "zipcode",
                                                    bsClass: "form-control",
                                                    onChange: this.onChange,
                                                    value: this.state.zipcode,
                                                    error: errors.zipcode,
                                                    className: classnames("", { invalid: errors.zipcode })
                                                },
                                            ]} />
                                        <FormInputs
                                            ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                                            properties={[
                                                {
                                                    label: "First Name",
                                                    type: "text",
                                                    id: 'firstName',
                                                    bsClass: "form-control",
                                                    placeholder: "First Name",
                                                    onChange: this.onChange,
                                                    value: this.state.firstName,
                                                    error: errors.firstName,
                                                    className: classnames("", { invalid: errors.firstName })
                                                },
                                                {
                                                    label: "Last Name",
                                                    type: "text",
                                                    id: 'lastName',
                                                    bsClass: "form-control",
                                                    placeholder: "Last Name",
                                                    onChange: this.onChange,
                                                    value: this.state.lastName,
                                                    error: errors.lastName,
                                                    className: classnames("", { invalid: errors.lastName })
                                                }, 
                                                {
                                                    label: "Phone Number",
                                                    type: "text",
                                                    id: 'phoneNumber',
                                                    bsClass: "form-control",
                                                    placeholder: "(000)-000-0000",
                                                    onChange: this.onChange,
                                                    value: this.state.phoneNumber,
                                                    error: errors.phoneNumber,
                                                    className: classnames("", { invalid: errors.phoneNumber })
                                                },
                                                {
                                                    label: "Birthday",
                                                    type: "date",
                                                    id: 'birthday',
                                                    bsClass: "form-control",
                                                    placeholder: "MM/DD/YYYY",
                                                    onChange: this.onChange,
                                                    value: this.state.birthday,
                                                    error: errors.birthday,
                                                    className: classnames("", { invalid: errors.birthday })
                                                },
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
        )
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
