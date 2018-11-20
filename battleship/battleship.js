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
  shipLength: 3,
  shipsSunk: 0,

  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }
  ],

  fire: function(guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var locations = ship.locations.indexOf(guess);
      if (index >= 0) {
        //We have a hit
        ship.hits[index] = "hit";
        return true;
      }
    }
    return false;
  }
};
