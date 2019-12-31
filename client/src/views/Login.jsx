import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";
// import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/faces/face-3.jpg";
import plaid from 'plaid'
const plaidClient = new plaid.Client(process.env.REACT_APP_PLAID_CLIENT_ID, process.env.REACT_APP_PLAID_SECRET, process.env.REACT_APP_PUBLIC_KEY, plaid.environments.development, { version: '2019-05-29' });

class Login extends Component {
    render() {
        return (
            <div className="content" >
                <Grid fluid>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Mike Andrew"
                                userName="michael24"
                                description={
                                    <span>
                                        "Lamborghini Mercy
                    <br />
                                        Your chick she so thirsty
                    <br />
                                        I'm in that two seat Lambo"
                  </span>
                                }
                                socials={
                                    <div>
                                        <Button simple>
                                            <i className="fa fa-facebook-square" />
                                        </Button>
                                        <Button simple>
                                            <i className="fa fa-twitter" />
                                        </Button>
                                        <Button simple>
                                            <i className="fa fa-google-plus-square" />
                                        </Button>
                                    </div>
                                }
                            />
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Login;