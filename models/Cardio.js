const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    type: {
        type: String,
        trim: true,
        required: "Type required"
    },
    name: {
        type: String,
        required: "Name required"
    },
    duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;