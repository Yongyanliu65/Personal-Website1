const { getNextReviewDate } = require("../utils/scheduler");

const mistakes = [];

exports.getMistakes = (req, res) => {
  res.json(mistakes);
};

exports.addMistake = (req, res) => {
  const mistake = {
    id: Date.now(),
    userId: req.body.userId,
    questionId: req.body.questionId,
    selectedAnswer: req.body.selectedAnswer,
    masteryStatus: "reviewing",
    wrongCount: 1,
    reviewCount: 0,
    nextReviewAt: getNextReviewDate(0),
  };

  mistakes.push(mistake);
  res.status(201).json(mistake);
};

exports.updateMastery = (req, res) => {
  const mistake = mistakes.find(m => m.id == req.params.id);

  if (!mistake) {
    return res.status(404).json({ message: "Mistake not found" });
  }

  mistake.masteryStatus = req.body.masteryStatus;

  if (req.body.masteryStatus === "mastered") {
    mistake.nextReviewAt = null;
  }

  res.json(mistake);
};