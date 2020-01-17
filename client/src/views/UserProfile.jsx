import React, { Component } from "react";
import API from "utils/API";

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import UploaderB from "components/Uploader/Uploader copy.jsx";

import avatar from "assets/img/faces/face-3.jpg";

export default  class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthday: "",
      role: "",
      aboutMe: "",
    }
  }
  componentDidMount() {
    this.loadProfiles();
  }

  loadProfiles = () => {
    API.getProfiles()
      .then(res =>
        this.setState({ profiles: res.data, username: "", email: "", firstName: "", lastName: "", phoneNumber: "", birthday: "", role: "", aboutMe:"" })
      )
      .catch(err => console.log(err));
  };

  deleteProfile = id => {
    API.deleteProfile(id)
      .then(res => this.loadProfiles())
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
      API.saveProfile({
        username: this.state.username,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        birthday: this.state.birthday,
        role: this.state.role,
        aboutMe: this.state.aboutMe,
        // picture: this.state.picture
      })
        .then(res => this.loadProfiles())
        .catch(err => console.log(err));
    
  };

  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form onSubmit={this.handleFormSubmit}>
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Username",
                          name: "username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: "michael23",
                          value: this.state.username,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Email address",
                          name: "email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          value: this.state.email,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          name: "firstName",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Mike",
                          value: this.state.firstName,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Last name",
                          name: "lastName",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Andrew",
                          value: this.state.lastName,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Phone Number",
                          name: "phoneNumber",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "8002225555",
                          defaultValue:
                            "null",
                          value: this.state.phoneNumber,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Birthday",
                          name: "Birthday",
                          type: "date",
                          bsClass: "form-control",
                          placeholder: "01/01/00",
                          defaultValue: "01/01/00",
                          value: this.state.birthday,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Role",
                          name: "role",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "role",
                          defaultValue: "parent",
                          value: this.state.role,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />

                      <Row>
                          <Col md={12}>
                            <FormGroup controlId="formControlsTextarea">
                              <ControlLabel>About Me (Favorites, Dislikes, Notes )</ControlLabel>
                              <FormControl
                                rows="5"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="Here can be your description"
                                defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                                name="aboutMe"
                                value={this.state.aboutMe}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                      </Row>

                          <Button bsStyle="primary" pullRight fill type="submit" >
                            Update Profile
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
          <UploaderB/>
        </Grid>
      </div>

    );
  }
}
