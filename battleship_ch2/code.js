var location1;
var location2;
var location3;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
location1 = Math.floor(Math.random() * 4);
location2 = location1 + 1;
location3 = location1 + 2;
while (isSunk == false) {
  guess = prompt("Guess a number betwen 0 and 6.");
  if (guess > 6 || guess < 0) {
    alert("Please enter a valid response.");
  } else {
    guesses = guesses + 1;
  }
  if (guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1;
    alert("Hit!!");
  } else {
    alert("Miss!");
  }
  if (hits == 3) {
    isSunk = true;
    alert("You sank my battleship!");
  }
}
var stats =
  "You took " +
  guesses +
  " guesses to sink my battleship, " +
  "which means your shooting accuracy was " +
  3 / guesses;
alert(stats);
