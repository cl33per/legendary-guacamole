import React, { Component } from "react";
import API from "utils/API";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { Link } from "react-router-dom";
export class Tasks extends Component {
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

    deleteTodo = id => {
        API.deleteTodo(id)
            .then(res => this.loadTodos())
            .catch(err => console.log(err));
    };

  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    // const tasks_title = [
    //   'Sign contract for "What are conference organizers afraid of?"',
    //   "Lines From Great Russian Literature? Or E-mails From My Boss?",
    //   "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
    //   "Create 4 Invisible User Experiences you Never Knew About",
    //   'Read "Following makes Medium better"',
    //   "Unfollow 5 enemies from twitter"
    // ];
    var tasks = [];
    var number;
    for (var i = 0; i < this.state.todos.length; i++) {
      let todoTask = this.state.todos[i].task;
      console.log("Todos for table: ", this.state.todos.length);
      number = "checkbox" + i;
      tasks.push(
        <tr key={i}>
          <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td>
          <td>{todoTask}</td>
          <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td>
        </tr>,
        console.log("Tasks:", todoTask),
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
