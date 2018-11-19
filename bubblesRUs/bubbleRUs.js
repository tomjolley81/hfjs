var scores = [
  60,
  50,
  60,
  58,
  54,
  54,
  58,
  50,
  52,
  54,
  48,
  69,
  34,
  55,
  51,
  52,
  44,
  51,
  69,
  64,
  66,
  55,
  52,
  61,
  46,
  31,
  57,
  52,
  44,
  18,
  41,
  53,
  55,
  61,
  51,
  44
];
var costs = [
  0.25,
  0.27,
  0.25,
  0.25,
  0.25,
  0.25,
  0.33,
  0.31,
  0.25,
  0.29,
  0.27,
  0.22,
  0.31,
  0.25,
  0.25,
  0.33,
  0.21,
  0.25,
  0.25,
  0.25,
  0.28,
  0.25,
  0.24,
  0.22,
  0.2,
  0.25,
  0.3,
  0.25,
  0.24,
  0.25,
  0.25,
  0.25,
  0.27,
  0.25,
  0.26,
  0.29
];
var highScore = Math.max(...scores);
var highScoreIndex = [];
var highScoreIndexes = [];
var i = 0,
  j = 0,
  k = 0;
var winners;
var cost = 100;
var index;
function scoresToPage() {
  while (i < scores.length) {
    document.write("Bubble solution #" + i + " score: " + scores[i] + "<br>");
    i++;
  }
}
function getHighScore() {
  while ((k = scores.indexOf(highScore, k + 1)) != -1) {
    highScoreIndex.push(k);
  }
}
function getLowestCost() {
  for (l = 0; l < scores.length; l++) {
    if (scores[l] == highScore) {
      if (cost > costs[l]) {
        cost = costs[l];
        index = l;
      }
    }
  }
  return index;
}
scoresToPage();
getHighScore();
getLowestCost();
var lowestCost = getLowestCost();
document.write(" Bubble Tests: " + scores.length + "<br>");
document.write("Highest Bubble Score: " + highScore + "<br>");
document.write("Solutions with highest score: " + highScoreIndex + "<br>");
document.write(
  "Bubble Solution # " + lowestCost + " is the most cost effective"
);
