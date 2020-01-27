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
                                <p>Family Ties is a one-stop shop for household organization. Need a calendar to track family events? We’ve got one! Need a to-do list to track tasks? We’ve got one! We’ve also got banking, and bills, AND we have a family chat room!</p>
                                <p> We know that it’s frustrating to try and wrangle the minutiae of daily life. There’s an app for everything now! Calendars, to-do lists, banking and bills, chats – they all have their own apps. But ours is special. It’s all of those things wrapped into one – plus more! </p>
                                <p>And that’s not all! Be on the lookout for the pro version.  You'll be able to customize your profiles with all sorts of details, like favorites, dislikes, meds, and other notes.  We'll have a family vault, where you can store pictures of important documents, like tax documents, marriage certificates, birth certificates - our vault will hold any image you want to upload!  We'll also have a kitchen, where you'll be able to plan meals, pull down new and exciting recipes, and make grocery lists.  And there will be that all-important map function, which will help you get wherever you need to go.</p> 
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
