function getNextReviewDate(reviewCount) {
  const intervals = [1, 3, 7, 14, 30];
  const days = intervals[Math.min(reviewCount, intervals.length - 1)];

  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
}

module.exports = { getNextReviewDate };