const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please enter a question"]
    },
    
    options: {
        type: [String],
        required: [true, "Please enter options"]
    },
    
    answer: {
        type: String,
        required: [true, "Please enter an answer"]
    },
    
    difficulty: {
        type: Number,
        required: [true, "Please enter difficulty level"]
    },
    
    topic: {
        type: String,
        required: [true, "Please enter topic"]
    },

    subject: {
        type: String,
        required: [true, "Please enter subject"]
    },

});


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;