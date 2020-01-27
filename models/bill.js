const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const billSchema = new Schema({
    creditor: {
        type: String,
        unique: true,
        required: "Creditor is required"
    },
    amount: {
        type: Number,
        required: "Amount is required"
    },
    dueDate: {
        type: Date,
        required: "The due date is required"
    }
    // Consider recurrence later.
    // recurring: {
    //     type: Boolean,
    //     default: false
    // }

    
}, { versionKey: false });

module.exports = Bill = mongoose.model("Bill", billSchema);

