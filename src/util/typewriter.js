const sleep = require("./sleep");
const blessed = require("blessed");

module.exports = async (text, element, screen) => {
  element.setText("");
  for (let i = 0; i < text.length; i++) {
    await sleep(75);
    element.setContent(
      "{center}" +
        blessed.stripTags(element.getText()) +
        text.substr(i, 1) +
        "{/center}"
    );
    screen.render();
  }
  return Promise.resolve();
};
