const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema ({
    title: { type: String, required: true },
    creator: { type: String, required: true },
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, default: Date.now().addHours(1) },
    description: { type: String }
});

module.exports = Todo = mongoose.model("Todo", todoSchema);