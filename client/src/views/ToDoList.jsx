import React, { Component } from "react";
import API from "utils/API";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Table

} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


export default  class ToDoList extends Component {
  constructor(){
    super();
    this.state = {
        todos: [],
        task: "",
        priority: "",
        comments: ""   
    };
  };
    componentDidMount(){
        this.loadTodos();
    }

    loadTodos = () => {
      console.log("PAGE LOADED")
        API.getTodos()
            .then(res => { console.log("THEN LOADED")
                this.setState({ todos: res.data, task: "", priority: "", targetDate: "", comments: ""})
            }
            )
            .catch(err => console.log(err));
    };
    editTodos = (e) => {
      // this.showModal();
      // (todoEdit).empty();
      // var thisId = this.state.id;
      // API.getTodos(id)
      //   .then(res => { console.log("retrieve todo")
      //     this.setState({ todos: res.data, task: "", priority: "", targetDate: "", comments: ""})
      // })

      // const editedTodo = {
      //   task: this.state.task,
      //   priority: this.state.priority,
      //   targetDate: this.state.targetDate,
      //   comments: this.state.comments,
      // }
      //   API.updateTodo(editedTodo)
      //       .then(res => { console.log("THEN LOADED")
      //           this.setState({ todos: res.data, task: "", priority: "", targetDate: "", comments: ""})
      //       }
      //       )
      //       .catch(err => console.log(err));
    };


    deleteTodo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

  handleFormSubmit = state => {
    state.preventDefault();
            API.saveTodo({
                task: this.state.task,
                priority: this.state.priority,
                // targetDate: this.state.targetDate,
                comments: this.state.comments
            }).then(res => {
              console.log(res)
              this.loadTodos()})
            .catch(err => console.log(err));
    };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add New Task"
                content={
                  <form onSubmit={this.handleFormSubmit}>
                    <FormInputs
                      ncols={["col-md-8", "col-md-4"]}
                      properties={[
                        {
                          label: "Task",
                          type: "task",
                          bsClass: "form-control",
                          placeholder: "Task",
                          name: "task",
                          value: this.state.task,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Priority",
                          type: "priority",
                          bsClass: "form-control",
                          placeholder: "Low",
                          name: "priority",
                          value: this.state.priority,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Target Date",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "MM/DD/YY",
                          defaultValue: Date.now(),
                          name:"targetDate",
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
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" disabled={!(this.state.task)}>
                      Add Task!
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
                                title="To-Do List"
                                ctTableFullWidth
                                ctTableResponsive
                                content=
                                  { this.state.todos.length ? (
                                    <Table hover>
                                      <thead>
                                        <tr>
                                          <th>Task</th>
                                          <th>Priority</th>
                                          <th>Comments</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                      {this.state.todos.map(todo => (
                                        <tr key={todo._id}>
                                          <td>
                                            <Link to={"api/todos/" + todo._id}>
                                              {todo.task}
                                            </Link>
                                          </td>
                                          <td>
                                            {todo.priority}
                                          </td>
                                          <td>
                                            {todo.comments}
                                          </td>
                                          <td>
                                            <Button bsStyle="danger" simple type="button" bsSize="xs"  onClick={() => this.deleteTodo(todo._id)}><i className="fa fa-times" /></Button>
         
                                          </td>
                                        </tr>
                                      ))}
                                      </tbody>
                                    </Table>
                                  ) : (
                                    <h3>No Results to Display</h3>
                                  )}
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
