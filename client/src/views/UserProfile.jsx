import React, { Component } from "react";
import API from "utils/API";
import axios from 'axios';
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

import avatar from "assets/img/faces/face-3.jpg";
// import Uploader from "../components/Uploader/Uploader.jsx";

const BASE_URL = 'http://localhost:5000/';

export default  class UserProfile extends Component {
  state = {
    users: [],
    groupName: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    aboutMe: "",

    // for image posts
    images: [],
    imageUrls: [],
    message: '',
    // fileTitle: ""
  };

  componentDidMount() {
    this.loadProfiles();
  }

  loadProfiles = () => {
    API.getProfiles()
      .then(res =>
        this.setState({ profiles: res.data, username: "", email: "", groupName: "", firstName: "", lastName: "", address: "", city: "", country: "", zipCode: "", aboutMe:"" })
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveProfile({
        username: this.state.username,
        email: this.state.email,
        groupName:  this.state.groupName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        country: this.state.country,
        zipCode: this.state.zipCode,
        aboutMe: this.state.aboutMe,
        // picture: this.state.picture
      })
        .then(res => this.loadProfiles())
        .catch(err => console.log(err));
    }
  };

  selectImages = (event) => {
    let images = []
    for (var i = 0; i < event.target.files.length; i++) {
        images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
    let message = `${images.length} valid image(s) selected`
    this.setState({ images, message })
}

uploadImages = () => {
    const uploaders = this.state.images.map(image => {
    const data = new FormData();
    data.append("image", image, image.name);

    // Make an AJAX upload request using Axios
    return axios.post(BASE_URL + 'upload', data)
    .then(response => {
        this.setState({
        imageUrls: [ response.data.imageUrl, ...this.state.imageUrls ]
        });
    })
  //   API.saveFile({
  //     username: this.state.fileTitle,
  //     })
  //     .then(res => this.loadProfiles())
  //     .catch(err => console.log(err));
  // }
});

// Once all the files are uploaded
axios.all(uploaders).then(() => {
    console.log('done');
}).catch(err => alert(err.message));
}

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Group (disabled)",
                          name: "groupName",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Group Name",
                          defaultValue: "Smith Family",
                          value: this.state.groupName,
                          disabled: true
                        },
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
                          label: "Adress",
                          name: "address",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
                          value: this.state.address,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          name: "city",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Mike",
                          value: this.state.city,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Country",
                          name: "country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "Andrew",
                          value: this.state.country,
                          onChange: this.handleInputChange
                        },
                        {
                          label: "Postal Code",
                          name: "zipCode",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code",
                          value: this.state.zipCode,
                          onChange: this.handleInputChange
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
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

                    <Button bsStyle="primary" pullRight fill type="submit" onSubmit={this.handleFormSubmit}>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                  
                }
              />
            <div>
            <div className="col-sm-12">
                <h1>Image Uploader</h1><hr/>
                <div className="col-sm-4">
                    <input className="form-control " type="file" onChange={this.selectImages} multiple/>
                </div>
                <p className="text-info">{this.state.message}</p>
                <br/><br/><br/>
                <div className="col-sm-4">
                    <button className="btn btn-primary" value="Submit" onClick={this.uploadImages}>Submit</button>
                </div>
            </div>


            <div className="row col-lg-12">
                {
                this.state.imageUrls.map((url, i) => (
                <div className="col-lg-2" key={i}>
                    <img src={BASE_URL + url} className="img-rounded img-responsive" alt="not available"/><br/>
                </div>
                ))
                }
            </div>
        </div>
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
