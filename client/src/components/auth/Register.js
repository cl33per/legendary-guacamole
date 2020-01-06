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

         // TODO: Figure out how to show errors below form feilds. Then below commented text can be removed. 
            // <div className="container">
            //     <div className="row">
            //         <div className="col s8 offset-s2">
            //             <Link to="/" className="btn-flat waves-effect">
            //                 <i className="material-icons left">keyboard_backspace</i> Back to
            //                 home
            // </Link>
            //             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            //                 <h4>
            //                     <b>Register</b> below
            //   </h4>
            //                 <p className="grey-text text-darken-1">
            //                     Already have an account? <Link to="/login">Log in</Link>
            //                 </p>
            //             </div>
            //             <form noValidate onSubmit={this.onSubmit}>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.name}
            //                         error={errors.name}
            //                         id="name"
            //                         type="text"
            //                         className={classnames("", {
            //                             invalid: errors.name
            //                         })}
            //                     />
            //                     <label htmlFor="name">Name</label>
            //                     <span className="red-text">{errors.name}</span>
            //                 </div>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.email}
            //                         error={errors.email}
            //                         id="email"
            //                         type="email"
            //                         className={classnames("", {
            //                             invalid: errors.email
            //                         })}
            //                     />
            //                     <label htmlFor="email">Email</label>
            //                     <span className="red-text">{errors.email}</span>
            //                 </div>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.password}
            //                         error={errors.password}
            //                         id="password"
            //                         type="password"
            //                         className={classnames("", {
            //                             invalid: errors.password
            //                         })}
            //                     />
            //                     <label htmlFor="password">Password</label>
            //                     <span className="red-text">{errors.password}</span>
            //                 </div>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.password2}
            //                         error={errors.password2}
            //                         id="password2"
            //                         type="password"
            //                         className={classnames("", {
            //                             invalid: errors.password2
            //                         })}
            //                     />
            //                     <label htmlFor="password2">Confirm Password</label>
            //                     <span className="red-text">{errors.password2}</span>
            //                 </div>
            //                 <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            //                     <button
            //                         style={{
            //                             width: "150px",
            //                             borderRadius: "3px",
            //                             letterSpacing: "1.5px",
            //                             marginTop: "1rem"
            //                         }}
            //                         type="submit"
            //                         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            //                     >
            //                         Sign up
            //     </button>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
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
