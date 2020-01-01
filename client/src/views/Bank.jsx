import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
} from "react-bootstrap";
import plaid from 'plaid'

const plaidClient = new plaid.Client(
    process.env.REACT_APP_PLAID_CLIENT_ID,
     process.env.REACT_APP_PLAID_SECRET, 
     process.env.REACT_APP_PUBLIC_KEY, 
     plaid.environments.development, 
     { version: '2019-05-29' }
);

class Login extends Component{
    render(){
    return (
        <div className = "content" >
            <Grid fluid>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Grid>
      </div>
    );
}
}
export default Login;