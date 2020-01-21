import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    Grid,
    Row,
    Col,
    Image
} from "react-bootstrap";
import GIF from "assets/img/Family-Ties-GIF.gif"
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import avatarCody from "assets/img/faces/avatarCody.jpg";
import avatarKate from "assets/img/faces/avatarKate.jpg";
import avatarAaron from "assets/img/faces/avatarAaron.jpeg";
import backgroundImage from "assets/img/livingroom.jpg"
class Login extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Image src={GIF} className="responsive-img guac-center"/>
                            <br />
                            <Col md={6}>
                                <h4 className="flow-text text-center" >About Family Ties</h4>
                                <p>We know that it’s frustrating to try and wrangle the minutiae of daily life. There’s an app for everything now! Calendars, to-do lists, banking and bills and budgets, grocery lists – they all have their own apps. But ours is special. It’s all of those things wrapped into one – plus more! 
                                    </p>
                                <p>Family Ties is a one-stop shop for household organization. Need a calendar to track family events? We’ve got one! Need a to-do list to track tasks? We’ve got one! We’ve got banking and bills, we’ve got grocery lists, AND we have a family chat room! Each user will have their own profile, and each user will be able to chat with other users in the family room.</p>   
                                <p>And that’s not all! We’ve also got the family vault. Need a place to store tax documents? Marriage certificates? Birth certificates? We’ve got you covered. Our family vault will store any images you want to upload, including those priceless photos of grandma as a young girl.</p>                             
                            </Col>
                            <Col md={2}>
                                <UserCard
                                    bgImage={backgroundImage}
                                    avatar={avatarCody}
                                    name="Cody Leeper"
                                    userName="cl33per"
                                    description={
                                    <span>Frontend Developement</span> 
                                    }
                                    socials={
                                        <div>
                                            <Button simple href="https://www.facebook.com/cl33per">
                                                <i className="fa fa-facebook-square" />
                                            </Button>
                                            <Button simple href="https://www.linkedin.com/in/cleeper92/">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                            <Button simple href="https://www.github.com/cl33per">
                                                <i className="fa fa-github"/>
                                            </Button>
                                        </div>
                                    }
                                />
                            </Col>
                            <Col md={2}>
                                <UserCard
                                    bgImage={backgroundImage}
                                    avatar={avatarKate}
                                    name="Kate Laney"
                                    userName="KateALaney"
                                    description={
                                        <span>Project Management</span>
                                    }
                                    socials={
                                        <div>
                                            <Button simple href="https://www.linkedin.com/in/katealaney/">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                            <Button simple href="https://github.com/KateALaney" >
                                                <i className="fa fa-github"/>
                                            </Button>
                                        </div>
                                    }
                                />
                            </Col>
                            <Col md={2}>
                                <UserCard
                                    bgImage={backgroundImage}
                                    avatar={avatarAaron}
                                    name="Aaron McKoy"
                                    userName="ArMc8234"
                                    description={
                                        <span>Backend Development</span>
                                    }
                                    socials={
                                        <div>
                                            <Button simple href="https://www.linkedin.com/in/aaron-mckoy/">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                            <Button simple href="https://github.com/ArMc8234">
                                                <i className="fa fa-github" />
                                            </Button>
                                        </div>
                                    }
                                />
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Login.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Login);
