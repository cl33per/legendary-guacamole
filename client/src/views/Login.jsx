import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

export default class Login extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Login"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-6", "col-md-6",]}
                                            properties={[
                                                {
                                                    label: "Email address",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Email"
                                                },
                                                {
                                                    label: "Password",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Password"
                                                }
                                            ]}
                                        />
                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Login
                    </Button>
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
