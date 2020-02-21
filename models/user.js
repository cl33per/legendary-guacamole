const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Email = new Schema({
    address: { 
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    validated: { 
        type: Boolean, 
        default: false }
});

const Point = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

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
        type: Email,
        required: true },
    profile: {
        firstName: String,
        lastName: String,
        avatar: String,
        bio: String,
        address: {
            street1: String,
            street2: String,
            city: String,
            state: String,
            country: String,
            zip: String,
            location: {
                type: Point,
                required: false
            }
        }
    },
    active: { type: Boolean, default: true }
}, {
    timestamps: true
});

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

module.exports = User = mongoose.model("User", UserSchema);

//! Develop/t78-refctoring-data-schema
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
