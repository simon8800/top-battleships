import { gameboardElementFactory } from "./GameDisplay";
import Player from "../modules/Player";
import Gameboard from "./Gameboard";
import Ship from "./Ship";

export default function GameController() {
  setupBoard();
  return;
}

function setupBoard() {
  let appDiv = document.getElementById("app");
  let playerGameboard = new Gameboard();
  let cpuGameboard = new Gameboard();
  let player = new Player("player", playerGameboard);
  let cpu = new Player("cpu", cpuGameboard);
  let playerGameboardElement = gameboardElementFactory(player);
  let cpuGameboardElement = gameboardElementFactory(cpu);

  appDiv.appendChild(playerGameboardElement);
  appDiv.appendChild(cpuGameboardElement);
}
