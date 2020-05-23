const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    password: {
        type: String,
        required: true
    },
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
        address: {
            streetOne: String,
            streetTwo: String,
            city: String,
            state: { type: String, match: [/^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/]},
            country: String,
            zipcode:String
        }
    },
    active: { type: Boolean, default: true },
},{timestamps:true},{ versionKey: false });

module.exports = User = mongoose.model("User", UserSchema);
