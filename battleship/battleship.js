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
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap, tap, is this thing on?");