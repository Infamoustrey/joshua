const fs = require("fs");

const sleep = require("./util/sleep");
const typewriter = require("./util/typewriter");

const screen = require("./screen");
const title = require("./components/title");
const map = require("./components/map");

screen.append(title);
screen.render();

const gameSelection = require("./components/game-selection");

gameSelection.on("select", (_, i) => {
  screen.remove(title);
  screen.append(map);

  screen.render();

  map.addMarker({
    lon: "-95.6563",
    lat: "29.9343",
    color: "red",
    char: "O"
  });
});

async function run() {
  // await typewriter(`Hello Professor.`, title, screen);
  // await sleep(2000);
  // await typewriter(`Want to play a game?`, title, screen);
  // await sleep(3000);
  // await typewriter(`What kind of game would you like to play?`, title, screen);
  // await sleep(1000);
  title.append(gameSelection);
  screen.render();
  gameSelection.focus();
}

run();

// let form = blessed.form({
//   parent: screen,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   top: "93%",
//   width: "100%",
//   height: "7%",
//   border: {
//     type: "line"
//   },
//   style: {
//     border: {
//       fg: "#f0f0f0"
//     }
//   }
// });

// let input = blessed.textbox({
//   parent: form,
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   inputOnFocus: true,
//   style: {
//     bg: "black",
//     fg: "white"
//   }
// });

// input.key("enter", e => {
//   fs.writeFileSync("test", input.getValue());
// });

// // If our box is clicked, change the content.
// box.on("click", function(data) {
//   box.setContent("{center}Some different {red-fg}content{/red-fg}.{/center}");
//   screen.render();
// });

// // Quit on Escape, q, or Control-C.
// screen.key(["escape", "q", "C-c"], function(ch, key) {
//   return process.exit(0);
// });

// input.key(["escape"], function(ch, key) {
//   return process.exit(0);
// });

// input.focus();

// Render the screen.
