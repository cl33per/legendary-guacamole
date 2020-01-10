const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const eventSchema = new Schema({
    title: { type: String, required: true },
    start: { type: String},
    end: { type: String},
    allDay: {type: Boolean}
}, { versionKey: false});

module.exports = Event = mongoose.model("Event", eventSchema);