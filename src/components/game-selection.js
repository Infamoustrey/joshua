const blessed = require("blessed");

let gameSelection = blessed.list({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  interactive: true,
  keys: ["up", "down"],
  style: {
    fg: "white",
    bg: "black",
    selected: {
      bg: "blue"
    }
  },
  items: ["Global Thermonuclear War", "Tic Tac Toe", "Test"]
});

module.exports = gameSelection;
