const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fileTitle: { type: String, unique: true, required: true },
    // planner: { type: String, required: true },
    // startTime: { type: Date, default: Date.now },
    // endTime: { type: Date, default: function () { return moment().add(1, 'hour'); } },
    // description: { type: String }
});


module.exports = File = mongoose.model("File", fileSchema);