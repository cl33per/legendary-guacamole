import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Card } from "components/Card/Card.jsx";

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
            this.props.history.push("dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("dashboard");
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
                            title="User Login"
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
                                                placeholder: "Email Address",
                                                value: this.state.email,
                                                onChange:this.onChange,
                                                error: errors.email,
                                                className: classnames("", { invalid: errors.email || errors.emailnotfound})
                                            },
                                            {
                                                label: "Password",
                                                type: "password",
                                                id:'password',
                                                bsClass: "form-control",
                                                placeholder: "Password",
                                                value: this.state.password,
                                                onChange: this.onChange,
                                                error: errors.password,
                                                className: classnames("", { invalid: errors.password || errors.password })
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
