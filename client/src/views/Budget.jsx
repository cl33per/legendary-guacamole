import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Table
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import API from "utils/API";
import moment from "moment";

export default class Budget extends Component {
  constructor() {
    super();
    this.state = {
      bills: [],
      creditor: " ",
      amount: " ",
      dueDate: " "
    };
  }

  componentDidMount() {
    this.loadBills();
  }
  loadBills = () => {
    API.getBills()
      .then(res =>
        this.setState({
          bills: res.data,
          creditor: "",
          amount: "",
          dueDate: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBill = id => {
    API.deleteBill(id)
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveBill({
      creditor: this.state.creditor,
      amount: this.state.amount,
      dueDate: this.state.dueDate
    })
      .then(res => this.loadBills())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add New Bill"
                content={
                  <form onSubmit={this.handleFormSubmit}>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Creditor",
                          id: "creditor",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Company Name",
                          value: this.state.creditor,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Amount",
                          id: "amount",
                          type: "numberDecimal",
                          bsClass: "form-control",
                          placeholder: "0.00",
                          value: this.state.amount,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Due Date",
                          id: "dueDate",
                          type: "Date",
                          bsClass: "form-control",
                          placeholder: "MM/DD/YY",
                          value: this.state.dueDate,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <Button
                      bsStyle="info"
                      pullRight
                      fill
                      type="submit"
                      disabled={!this.state.creditor}
                    >
                      Add Bill!
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
        <Row>
          <Col md={12}>
            <Grid fluid>
              <Row>
                <Col md={12}>
                  <Card
                    plain
                    title="Upcomming Bills"
                    ctTableFullWidth
                    ctTableResponsive
                    content={
                      this.state.bills.length ? (
                        <Table hover>
                          <thead>
                          <tr>
                            <th>Creditor</th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th></th>
                          </tr>
                          <tr></tr>
                          </thead>
                          <tbody>
                          {this.state.bills.map(bill => (
                            <tr key={bill._id}>
                              <td>
                                <Link to={"api/bills/" + bill._id}>
                                  <strong>{bill.creditor}</strong>
                                </Link>
                              </td>
                              <td>{"$"+bill.amount}</td>
                              <td>{moment(bill.dueDate).format("MMM Do YYYY")}</td>
                              <td>
                                <Button
                                  bsStyle="danger"
                                  simple type="button" bsSize="xs"
                                  onClick={() => this.deleteBill(bill._id)}
                                >
                                <i className="fa fa-times" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                          </tbody>
                        </Table>
                      ) : (
                        <h3>No Results to Display</h3>
                      )
                    }
                  />
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </div>
    );
  }
}
