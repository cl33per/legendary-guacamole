const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: { 
        type: String, 
        lowercase: true, 
        unique: true,
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true },
    password: {
        type: String,
        required: true },
    email: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'], index: true
    },
    profile: {
        firstName: String,
        lastName: String,
        avatar: String,
        bio: String,
        address: {
            streetOne: String,
            streetTwo: String,
            city: String,
            state: String,
            country: String,
            zipcode: String
        }
    },
    active: { type: Boolean, default: true }
});

module.exports = User = mongoose.model("User", UserSchema);

//! Develop/t78-refctoring-data-schema/user
// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// }, { versionKey: false });
