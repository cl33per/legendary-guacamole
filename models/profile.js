const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    username: { type: String, trim: true, required: "Username is required" },
    email:  { 
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    groupName:  { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    zipCode: { type: Number },
    aboutMe: { type: String },
    //Placeholder for a picture stored as a relative path
    picture: { 
        type: String,
        get: v => `${root}${v}`
    },
    //The allows us to populate the profile with associated to-do items.
    todos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]
});

module.exports = Profile = mongoose.model("Profile", profileSchema);

//The following code is from https://mongoosejs.com/docs/schematypes.html#strings (Getters section)
// const doc = new Profile ({ name: 'Val', picture: '/123.png' });
// doc.picture; // 'https://s3.amazonaws.com/mybucket/123.png'
// doc.toObject({ getters: false }).picture; // '123.png'