const blessed = require("blessed");

let title = blessed.box({
  top: "center",
  left: "center",
  width: "50%",
  height: "50%",
  content: "",
  border: {
    type: "line"
  },
  tags: true,
  style: {
    fg: "white",
    bg: "black",
    border: {
      fg: "#f0f0f0"
    }
  }
});

title.key(["escape"], function(ch, key) {
  return process.exit(0);
});

module.exports = title;
