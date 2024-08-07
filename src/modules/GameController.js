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
  let boardDiv = document.querySelector(".boards");
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
  boardDiv.appendChild(playerGameboardElement);
  boardDiv.appendChild(cpuGameboardElement);

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
        cell.onclick = null;
        state.activePlayer = state.player;
        computerMove();
      };
    }
  }
}

function computerMove() {
  let cpu = state.cpu.player;
  let player = state.activePlayer.player;
  let gameboardElement = state.activePlayer.gameboardElement;
  let coordinates = cpu.randomHit(player.gameboard);
  let cellElement = getCellElement(
    coordinates.row,
    coordinates.column,
    gameboardElement
  );
  processPlayerMove(cellElement);
  state.activePlayer = state.cpu;
}

function processPlayerMove(cellElement) {
  // Attack on logical board
  let coordinates = JSON.parse(cellElement.dataset.coordinates);
  let gameboard = state.activePlayer.player.gameboard;
  let position = gameboard.getPosition(coordinates.row, coordinates.column);
  gameboard.receiveAttack(coordinates.row, coordinates.column);

  // Handle hit and miss
  if (cellElement.dataset.ship && position.ship !== 0) {
    let ship = position.ship;
    markCellAsHit(cellElement, ship);
  } else {
    markCellAsMiss(cellElement);
  }
  checkWin();
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

function checkWin() {
  let player = state.player.player;
  let cpu = state.cpu.player;
  if (player.gameboard.allShipsSunk()) {
    disableBoard();
    handleWin(cpu);
    return true;
  } else if (cpu.gameboard.allShipsSunk()) {
    disableBoard();
    handleWin(player);
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

function handleWin(winner) {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
  let header = modal.querySelector("h3");
  header.innerText = `${winner.name} wins!`;
  let button = modal.querySelector("button");
  button.onclick = () => {
    modal.style.display = "none";
    clearBoards();
    GameController();
  };
}

function clearBoards() {
  document.querySelector(".board").remove();
  document.querySelector(".board").remove();
}
