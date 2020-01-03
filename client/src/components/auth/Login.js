import React, { Component } from "react"; 
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";
// import { invalid } from "moment";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/admin/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/admin/dashboard");
        }

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

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Edit Profile"
                            content={
                                <form noValidate onSubmit={this.onSubmit}>
                                    <FormInputs
                                        ncols={["col-md-6","col-md-6"]}
                                        properties={[
                                            {
                                                label: "Email",
                                                type: "email",
                                                id:'email',
                                                bsClass: "form-control",
                                                placeholder: "Email Address"
                                            },
                                            {
                                                label: "Password",
                                                type: "password",
                                                id:'password',
                                                bsClass: "form-control",
                                                placeholder: "Password"
                                            }
                                    ]} 
                                    />
                                    <Button bsStyle="primary" pullRight fill type="submit">Login</Button>
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
            //     <div style={{ marginTop: "4rem" }} className="row">
            //         <div className="col s8 offset-s2">
            //             <Link to="/" className="btn-flat waves-effect">
            //                 <i className="material-icons left">keyboard_backspace</i> Back to
            //                 home
            // </Link>
            //             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            //                 <h4>
            //                     <b>Login</b> below
            //   </h4>
            //                 <p className="grey-text text-darken-1">
            //                     Don't have an account? <Link to="/register">Register</Link>
            //                 </p>
            //             </div>
            //             <form noValidate onSubmit={this.onSubmit}>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.email}
            //                         error={errors.email}
            //                         id="email"
            //                         type="email"
            //                         className={classnames("", {
            //                             invalid: errors.email || errors.emailnotfound
            //                         })}
            //                     />
            //                     <label htmlFor="email">Email</label>
            //                     <span className="red-text">
            //                         {errors.email}
            //                         {errors.emailnotfound}
            //                     </span>
            //                 </div>
            //                 <div className="input-field col s12">
            //                     <input
            //                         onChange={this.onChange}
            //                         value={this.state.password}
            //                         error={errors.password}
            //                         id="password"
            //                         type="password"
            //                         className={classnames("", {
            //                             invalid: errors.password || errors.passwordincorrect
            //                         })}
            //                     />
            //                     <label htmlFor="password">Password</label>
            //                     <span className="red-text">
            //                         {errors.password}
            //                         {errors.passwordincorrect}
            //                     </span>
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
            //                         Login
            //     </button>
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
