import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
//   Jumbotron,
//   List,
//   DeleteBtn
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
import API from "utils/API";

export default  class TodoList extends Component {
    state = {
        todos: [],
        title: " ",
        targetDate: " ",
        comments: " "
    };

    componentDidMount(){
        this.loadTodos();
    }

    loadTodos = () => {
        API.getTodos()
            .then(res =>
                this.setState({ todos: res.data, title: "", targetDate: "", comments: ""})
            )
            .catch(err => console.log(err));
    };

    deleteTodo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { label, value } = event.target;
        this.setState({
            [label]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.saveTodo({
                title: this.state.title,
                targetDate: this.state.targetDate,
                comments: this.state.comments
            })
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
        }
    };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Add New Tasks"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-8", "col-md-4"]}
                      properties={[
                        {
                          label: "Title",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Title",
                          value: this.state.title,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Target Date",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "MM/DD/YY",
                          defaultValue: Date.now(),
                          value: this.state.targetDate,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Comments</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Add additional details or updates!"
                            value={this.state.comments}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" disabled={!(this.state.title)} onClick={this.handleFormSubmit}>
                      Add Task!
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
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
          </Row>
        </Grid>
        </div>

    );
  }
}