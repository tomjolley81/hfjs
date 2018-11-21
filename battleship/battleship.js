var view = {
  // This method takes a string message and displays it
  // in the message display area.
  displayMessage: function(msg) {
    // Code to come!
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    // Code to Come!!
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    // Code to come!
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
};
var model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] }
  ],
  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You Missed.");
    return false;
  },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  generateShipLocations: function() {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function() {
    var direction = Math.floor(Math.random() * 2);
    var row;
    var col;
    if (direction === 1) {
      // Generate a starting location for a horizontal ship
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - 3 + 1));
    } else {
      // Generate a starting location for a vertical ship
      row = Math.floor(Math.random() * (this.boardSize - 3 + 1));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        //add location to array for new horizontal ship
        newShipLocations.push(row + "" + (col + i));
      } else {
        // add location to array for new vertical ship
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },
  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (this.ships.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
};
function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if (guess === null || guess.length !== 2) {
    alert("oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert("Oops, that isn't on the board.");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      column < 0 ||
      column >= model.boardSize
    ) {
      alert("Oops, that's off the board!");
    } else {
      return row + column;
    }
    return null;
  }
}

var controller = {
  guesses: 0,
  processGuess: function(guess) {
    // Code to come!
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "You sank all my batttleships, in " + this.guesses + " guesses."
        );
      }
    }
  }
};

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();
}

function handleFireButton() {
  // get the player's guess from the form
  // and get it to the controller
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value.toUpperCase();
  controller.processGuess(guess);

  guessInput.value = "";
}
function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;
