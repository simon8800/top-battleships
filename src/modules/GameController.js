import { gameboardElementFactory, newGameOverlay } from "./GameDisplay";
import Player from "../modules/Player";
import Gameboard from "./Gameboard";

let state = { player: {}, cpu: {}, activePlayer: {} };

export default function GameController() {
  const pieces = setupBoard();

  // Add overlay
  return;
}

function setupBoard() {
  let appDiv = document.getElementById("app");
  // Initialize all logic components
  let playerGameboard = new Gameboard();
  let cpuGameboard = new Gameboard();
  let player = new Player("player", playerGameboard, "Player");
  let cpu = new Player("cpu", cpuGameboard, "CPU");
  // Initialize board components
  let playerGameboardElement = gameboardElementFactory(player);
  let cpuGameboardElement = gameboardElementFactory(cpu);
  // Populate state
  let playerData = { player: player, gameboardElement: playerGameboardElement };
  let cpuData = { player: cpu, gameboardElement: cpuGameboardElement };
  state = { player: playerData, cpu: cpuData, activePlayer: cpuData };
  // Populate cells with data
  populateCells(state.player);
  populateCells(state.cpu);

  // Add boards to UI
  appDiv.appendChild(playerGameboardElement);
  appDiv.appendChild(cpuGameboardElement);

  return { player, cpu, playerGameboardElement, cpuGameboardElement };
}

function populateCells(playerData) {
  let gameboardElement = playerData.gameboardElement;
  let player = playerData.player;

  // Fill cells with player.gameboard
  for (let cell of gameboardElement.children) {
    let coordinates = JSON.parse(cell.dataset.coordinates);
    let gameboardCell = player.gameboard.getPosition(
      coordinates.row,
      coordinates.column
    );

    // Fill cell with ship
    if (gameboardCell.ship !== 0) {
      cell.dataset.ship = JSON.stringify(gameboardCell.ship);
      if (player.type === "player") {
        cell.classList.add("ship");
      } else {
        cell.classList.add("hidden-ship");
      }
    }

    if (player.type === "cpu") {
      cell.onclick = () => {
        processPlayerMove(cell);
      };
    }
  }
}

function processPlayerMove(cell) {
  // Attack on logical board
  let coordinates = JSON.parse(cell.dataset.coordinates);
  let gameboard = state.activePlayer.player.gameboard;
  let position = gameboard.getPosition(coordinates.row, coordinates.column);
  gameboard.receiveAttack(coordinates.row, coordinates.column);

  // Handle hit and miss
  if (cell.dataset.ship && position.ship !== 0) {
    let ship = position.ship;
    markCellAsHit(cell, ship);
  } else {
    markCellAsMiss(cell);
  }
}

function markCellAsHit(cell, ship) {
  cell.classList.add("hit-ship");
  cell.dataset.ship = JSON.stringify(ship);
  if (ship.isSunk()) {
    sinkShipElements(ship, state.activePlayer.gameboardElement);
  }
}

function markCellAsMiss(cell) {
  cell.classList.add("hit");
}

// If ship is sunk, add sunk-ship to all ship cellElements
function sinkShipElements(ship, gameboardElement) {
  for (let position of ship.positions) {
    let cellElement = getCellElement(
      position[0],
      position[1],
      gameboardElement
    );
    cellElement.dataset.ship = JSON.stringify(ship);
    cellElement.classList.remove("hit-ship");
    cellElement.classList.add("sunk-ship");
  }
}

function getCellElement(x, y, gameboardElement) {
  let cellElement = Array.from(gameboardElement.children).filter((cell) => {
    let coordinates = JSON.parse(cell.dataset.coordinates);
    if (coordinates.row === x && coordinates.column === y) {
      return cell;
    }
  });

  return cellElement[0];
}

function checkWin(player, cpu) {
  if (player.gameboard.allShipsSunk()) {
    disableBoard();
    return true;
  } else if (cpu.gameboard.allShipsSunk()) {
    disableBoard();
    return true;
  }
  return false;
}

function disableBoard() {
  let cells = state.cpu.gameboardElement.children;
  for (let cell of cells) {
    cell.onclick = null;
  }
}

function endGame() {}
