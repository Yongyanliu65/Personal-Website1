const questions = [];

exports.getQuestions = (req, res) => {
  res.json(questions);
};

exports.createQuestion = (req, res) => {
  const question = {
    id: Date.now(),
    section: req.body.section,
    topic: req.body.topic,
    questionText: req.body.questionText,
    correctAnswer: req.body.correctAnswer,
    explanation: req.body.explanation,
  };

  questions.push(question);
  res.status(201).json(question);
};