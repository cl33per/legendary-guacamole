const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToSchema = new Schema ({
    name: { 
        type: String, 
        required: "listName is Required",
        unique: true
    },
    targetDate: {
         type: Date,
          default: Date.now},
    Comments: {
         type: String
        },
});

const TodoList = mongoose.model("TodoList", ToSchema);
module.exports = TodoList;