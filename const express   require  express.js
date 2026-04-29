const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const mistakeRoutes = require("./routes/mistakeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/mistakes", mistakeRoutes);

app.get("/", (req, res) => {
  res.send("SAT backend running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

function getNextReviewDate(reviewCount) {
  const days = [1, 3, 7, 14, 30];
  const interval = days[Math.min(reviewCount, days.length - 1)];
  const date = new Date();
  date.setDate(date.getDate() + interval);
  return date;
}