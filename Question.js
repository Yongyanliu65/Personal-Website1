const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    section: String,
    topic: String,
    subtopic: String,
    difficulty: String,
    questionText: {
      type: String,
      required: true,
    },
    choices: [String],
    correctAnswer: String,
    explanation: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);