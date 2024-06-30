import Gameboard from "./Gameboard";
import Ship from "./Ship";

// Create cells to place into gameboard
function cellElementFactory(coordinates, classnameList, ship) {
  let cell = document.createElement("div");
  cell.dataset.coordinates = JSON.stringify(coordinates);
  cell.classList.add("cell");
  cell.classList.add(...classnameList);

  if (!!ship) {
    cell.dataset.ship = JSON.stringify(ship);
  }

  // Prevent cell from being unchecked
  cell.onclick = () => {
    console.log("Hello from", cell.dataset.coordinates);
    cell.classList.add("hit-ship");
  };

  return cell;
}

// Creates ships to place onto gameboard
function shipElementFactory(ship) {
  let shipElement = document.createElement("div");
  return shipElement;
}

// Creates the gameboard
function gameboardElementFactory(player) {
  let gameboard = document.createElement("div");
  gameboard.classList.add("board");
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let coordinates = { row: i, column: j };
      let newCell = cellElementFactory(coordinates, []);
      gameboard.appendChild(newCell);
    }
  }
  return gameboard;
}

export { cellElementFactory, shipElementFactory, gameboardElementFactory };
