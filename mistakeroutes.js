const express = require("express");
const router = express.Router();
const mistakeController = require("../controllers/mistakeController");

router.get("/", mistakeController.getMistakes);
router.post("/", mistakeController.addMistake);
router.patch("/:id/mastery", mistakeController.updateMastery);

module.exports = router;