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
            email: "",
            password: "",
            passwordConfirm: "",
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
            errors: {}
        };
    };

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/dashboard");
        };
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        };
    };

    onChange = e => {
        this.setState({ 
            [e.target.id]: e.target.value
        });
    };

    profileOnChange = e => {
        const profile = this.state.profile;
        profile[e.target.id] = e.target.value
        this.setState({
            profile
        });
    };

    addressOnChange = e => {
        const addressObject = this.state.profile.address;
        addressObject[e.target.id] = e.target.value
        this.setState({
            addressObject
        });
    };


    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            profile: {
                firstName: this.state.profile.firstName,
                lastName: this.state.profile.lastName,
                phoneNumber: this.state.profile.phoneNumber,
                birthday: this.state.profile.birthday,
                // avatar: this.state.profile.avatar,
                // bio: this.state.profile.bio,
                address: {
                    streetOne: this.state.profile.address.streetOne,
                    streetTwo: this.state.profile.address.streetTwo,
                    city: this.state.profile.address.city,
                    state: this.state.profile.address.state,
                    country: this.state.profile.address.country,
                    zipcode: this.state.profile.address.zipcode
                }
            }
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
                                title="New Account Registration"
                                content={
                                    <form onSubmit={this.onSubmit}>
                                        <FormInputs
                                            ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                                            properties={[
                                                {
                                                    label: "Username",
                                                    type: "text",
                                                    id: "username",
                                                    bsClass: "form-control",
                                                    placeholder: "User Name",
                                                    autoComplete:"username",
                                                    onChange: this.onChange,
                                                    value: this.state.username,
                                                    error: errors.username,
                                                    className: classnames("", { invalid: errors.username })
                                                },
                                                {
                                                    label: "Email",
                                                    type: "email",
                                                    id: "email",
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
                                                    id: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Password",
                                                    autoComplete:"password",
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
                                                    autoComplete: "password",
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
                                                    type: "text",
                                                    id: "streetOne",
                                                    bsClass: "form-control",
                                                    placeholder: "Street Address",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.streetOne,
                                                    error: errors.streetOne,
                                                    className: classnames("", { invalid: errors.streetOne })
                                                },
                                                {
                                                    label: "Address 2",
                                                    type: "text",
                                                    id: "streetTwo",
                                                    bsClass: "form-control",
                                                    placeholder: "Address Two",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.streetTwo,
                                                    error: errors.streetTwo,
                                                    className: classnames("", { invalid: errors.streetTwo })
                                                },
                                                {
                                                    label: "City",
                                                    type: "text",
                                                    id: "city",
                                                    bsClass: "form-control",
                                                    placeholder: "City",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.city,
                                                    error: errors.city,
                                                    className: classnames("", { invalid: errors.city })
                                                },
                                                {
                                                    label: "State",
                                                    type: "text",
                                                    id: "state",
                                                    bsClass: "form-control",
                                                    placeholder: "State",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.state,
                                                    error: errors.state,
                                                    className: classnames("", { invalid: errors.state })
                                                },
                                                {
                                                    label: "Country",
                                                    type: "text",
                                                    id: "country",
                                                    bsClass: "form-control",
                                                    placeholder: "Country",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.country,
                                                    error: errors.country,
                                                    className: classnames("", { invalid: errors.country })
                                                },
                                                {
                                                    label: "Zipcode",
                                                    type: "text",
                                                    id: "zipcode",
                                                    bsClass: "form-control",
                                                    placeholder: "Zipcode",
                                                    onChange: this.addressOnChange,
                                                    value: this.state.profile.address.zipcode,
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
                                                    id: "firstName",
                                                    bsClass: "form-control",
                                                    placeholder: "First Name",
                                                    onChange: this.profileOnChange,
                                                    value: this.state.profile.firstName,
                                                    error: errors.firstName,
                                                    className: classnames("", { invalid: errors.firstName })
                                                },
                                                {
                                                    label: "Last Name",
                                                    type: "text",
                                                    id: "lastName",
                                                    bsClass: "form-control",
                                                    placeholder: "Last Name",
                                                    onChange: this.profileOnChange,
                                                    value: this.state.profile.lastName,
                                                    error: errors.lastName,
                                                    className: classnames("", { invalid: errors.lastName })
                                                }, 
                                                {
                                                    label: "Phone Number",
                                                    type: "text",
                                                    id: "phoneNumber",
                                                    bsClass: "form-control",
                                                    placeholder: "(000)-000-0000",
                                                    onChange: this.profileOnChange,
                                                    value: this.state.profile.phoneNumber,
                                                    error: errors.phoneNumber,
                                                    className: classnames("", { invalid: errors.phoneNumber })
                                                },
                                                {
                                                    label: "Birthday",
                                                    type: "date",
                                                    id: "birthday",
                                                    bsClass: "form-control",
                                                    placeholder: "MM/DD/YYYY",
                                                    onChange: this.profileOnChange,
                                                    value: this.state.profile.birthday,
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
    };
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
