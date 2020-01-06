const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: { type: String, required: true },
    targetDate: { type: Date, default: Date.now(), required: false  },
    Comments: { type: String, required: false },
    Completed: { type: Boolean, default: false },
    Archive: { type: Boolean, default: false }
});

module.exports = Todo = mongoose.model("Todo", todoSchema);