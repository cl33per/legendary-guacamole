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
        firstName: { type: String, required: [true, "can't be blank"]},
        lastName: { type: String, required: [true, "can't be blank"] },
        phoneNumber: String,
        birthday:Date,
        avatar: String,
        bio: String,
        address: {
            streetOne: String,
            streetTwo: String,
            city: String,
            state: { type: String, match: [/^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/]},
            country: String,
            zipcode: { type: String, match: [/(^\d{ 5}$) | (^\d{ 9}$)| (^\d{ 5 } -\d{ 4 } $)/, 'wrong format'] }
        }
    },
    active: { type: Boolean, default: true },
},{timestamps:true});

module.exports = User = mongoose.model("User", UserSchema);
