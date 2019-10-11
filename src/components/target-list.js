const blessed = require("blessed");

let targetList = blessed.list({
  top: 0,
  left: "10%",
  width: "10%",
  height: "80%",
  border: {
    type: "line"
  },
  label: "Cities",
  interactive: true,
  items: ["Tokyo", "Paris", "New York City"],
  keys: ["up", "down"],
  style: {
    fg: "white",
    bg: "black",
    selected: {
      bg: "blue"
    },
    border: {
      fg: "red"
    }
  }
});

targetList.key("pageup", () => {
  targetList.move(-20);
});
targetList.key("pagedown", () => {
  targetList.move(20);
});

module.exports = targetList;
