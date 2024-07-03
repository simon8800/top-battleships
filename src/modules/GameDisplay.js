// Create cells to place into gameboard
function cellElementFactory(coordinates, classnameList) {
  let cell = document.createElement("div");
  cell.dataset.coordinates = JSON.stringify(coordinates);
  cell.classList.add("cell");
  cell.classList.add(...classnameList);

  return cell;
}

// Creates ships to place onto gameboard
function shipElementFactory(ship) {
  let shipElement = document.createElement("div");
  return shipElement;
}

// Creates the gameboard
function gameboardElementFactory(player) {
  let gameboardElement = document.createElement("div");
  gameboardElement.classList.add("board");

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let coordinates = { row: i, column: j };

      let ship = player.gameboard.getPosition(i, j)["ship"];
      let newCell = cellElementFactory(coordinates, [], ship, player);
      gameboardElement.appendChild(newCell);
    }
  }

  return gameboardElement;
}

function newGameOverlay(winner) {
  let appDiv = document.querySelector("#app");
  let modal = document.createElement("div");
  modal.classList.add("modal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  let winnerHeader = document.createElement("h2");
  winnerHeader.innerText = `${winner.name} won!`;

  modal.appendChild(modalContent);
  appDiv.appendChild(modal);
}

export {
  cellElementFactory,
  shipElementFactory,
  gameboardElementFactory,
  newGameOverlay,
};
