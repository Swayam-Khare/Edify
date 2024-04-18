const mongoose = require("mongoose");

const testDetailsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter a user id"],
    },

    subject: {
        type: String,
        required: [true, "Please enter subject"],
    },

    topic: {
        type: String,
        required: [true, "Please enter topic"],
    },

    questions: {
        type: [mongoose.Schema.Types.ObjectId],
        required: [true, "Please enter questions"],
    },

    answers: {
        type: [String],
        required: [true, "Please enter answers"],
    },

    score: {
        type: Number,
        required: [true, "Please enter score"],
    },

    weak_topics: {
        type: [String],
        default: [],
    },

    duration: {
        type: Number,
        required: [true, "Please enter duration"],
    },

    photo: {
        type: String,
        default: "",
    },
});

const TestDetails = mongoose.model("TestDetails", testDetailsSchema);

module.exports = TestDetails;