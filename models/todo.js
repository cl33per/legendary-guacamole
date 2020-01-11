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
    // targetDate: { type: Date, default: Date.now()  },
    comments: { type: String  },
    // completed: { type: Boolean, default: false },
    // archive: { type: Boolean, default: false }
});
// This creates our model from the above schema, using mongoose's model method
module.exports = Todo = mongoose.model("Todo", todoSchema);

