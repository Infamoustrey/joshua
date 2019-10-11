const blessed = require("blessed");
const cities = require("../cities");

let cityList = blessed.list({
  top: 0,
  left: 0,
  width: "10%",
  height: "80%",
  border: {
    type: "line"
  },
  label: "Cities",
  interactive: true,
  items: cities.map(city => city.name),
  keys: ["up", "down"],
  style: {
    fg: "white",
    bg: "black",
    selected: {
      bg: "blue"
    },
    border: {
      fg: "blue"
    }
  }
});

cityList.key("pageup", () => {
  cityList.move(-20);
});
cityList.key("pagedown", () => {
  cityList.move(20);
});

module.exports = cityList;
