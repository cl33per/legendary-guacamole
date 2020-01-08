const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    start: { type: Date, 'default': Date.now, index: true },
    end: { type: Date, 'default': Date.now, index: true },
    allday: {type:Boolean}
});

module.exports = Event = mongoose.model("Event", eventSchema);