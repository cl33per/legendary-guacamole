const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const todoSchema = new Schema({
    task: { 
      type: String,
      unique: true,
      required: "Task is required"
      },
    priority: { type: String },  
    targetDate: { type: Date, default: Date.now()  },
    comments: { type: String  },
    completed: { type: Boolean, default: false },
    archive: { type: Boolean, default: false }
});
// Custom method `setFullName`
todoSchema.methods.setFullName = function() {
  // Set the current user's `fullName` to their `firstName` and their `lastName` together
  this.fullName = this.firstName + " " + this.lastName;
  // Return the new `fullName`
  return this.fullName;
};

// Custom method `lastUpdatedDate`
todoSchema.methods.lastUpdatedDate = function() {
  // Set the current user's `lastUpdated` property to the current date/time
  this.lastUpdated = Date.now();
  // Return this new date
  return this.lastUpdated;
};

// This creates our model from the above schema, using mongoose's model method
module.exports = Todo = mongoose.model("Todo", todoSchema);

