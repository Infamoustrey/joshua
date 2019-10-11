const contrib = require("blessed-contrib");

let map = contrib.map({
  excludeAntartica: false,
  top: 0,
  right: 0,
  width: "80%",
  height: "80%",
  label: "World Map",
  border: {
    type: "line"
  },
  style: {
    fg: "white",
    bg: "black",
    border: {
      fg: "#f0f0f0"
    }
  }
});

module.exports = map;
