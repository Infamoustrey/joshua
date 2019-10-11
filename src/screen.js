const blessed = require("blessed");

// Create a screen object.
let screen = blessed.screen({
  smartCSR: true,
  title: "Joshua"
});

screen.key(["escape", "C-c"], () => {
  process.exit(0);
});

screen.render();

module.exports = screen;
