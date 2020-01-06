const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new GroupSchema object
// This is similar to a Sequelize model
const GroupSchema = new Schema({
    name: {
    type: String,
    unique: true
  },
  // `profiles` is an array that stores ObjectIds
  // The ref property links these ObjectIds to the profile model
  // This allows us to populate the Group with any associated profiles
  profiles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
module.exports = Group = mongoose.model("Group", GroupSchema);
