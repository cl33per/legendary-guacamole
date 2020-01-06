var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var todoSchema = new Schema({
    title: { type: String, required: true },
    targetDate: { type: Date, default: Date.now(), required: false  },
    Comments: { type: String, required: false },
    Completed: { type: Boolean, default: false },
    Archive: { type: Boolean, default: false }
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

