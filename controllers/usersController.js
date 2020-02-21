const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

module.exports = {
    // @route POST api/users/register
    // @desc Register user
    // @access Public
    register: (req, res) => {
        let bodyData = req.body
        // Form validation
        const { errors, isValid } = validateRegisterInput(bodyData);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        User.findOne({ email: bodyData.email }).then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const newUser = new User({
                    username: bodyData.username,
                    password: bodyData.password,
                    email: bodyData.email,
                    profile: {
                        firstName: bodyData.profile.firstName,
                        lastName: bodyData.profile.lastName,
                        avatar: bodyData.profile.avatar,
                        bio: bodyData.profile.bio,
                        address: {
                            streetOne: bodyData.profile.address.streetOne,
                            streetTwo: bodyData.profile.address.streetTwo,
                            city: bodyData.profile.address.city,
                            state: bodyData.profile.address.state,
                            country: bodyData.profile.address.country,
                            zip: bodyData.profile.address.zip
                            }
                        },
                    active: true
                    });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    },
    // @route POST api/users/login
    // @desc Login user and return JWT token
    // @access Public
    login: (req, res) => {
        let bodyData = req.body
        // Form validation
        const { errors, isValid } = validateLoginInput(bodyData);
        // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const email = bodyData.email;
        const password = bodyData.password;
        // Find user by email
        User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };
                    // Sign token  
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            res.json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ passwordincorrect: "Password incorrect" });
                }
            });
        });
    },
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },   
};
