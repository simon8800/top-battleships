import Ship from "./modules/Ship";
import Gameboard from "./modules/Gameboard";
import Player from "./modules/Player";

console.log("Heyo");

let playerBoard = new Gameboard();
console.log(playerBoard.board[0][2] === playerBoard.board[0][3]);

let destroyer = new Ship("destroyer", 3);
let carrier = new Ship("carrier", 5);
playerBoard.placeShip(destroyer, [0, 2], [0, 4]);
playerBoard.placeShip(carrier, [0, 2], [0, 6]);
playerBoard.board[0][2].hit = true;

console.log(playerBoard.board);
console.log(playerBoard.getPosition(0, 2) === playerBoard.getPosition(0, 3));
console.log(playerBoard.hasShipInPosition(0, 2));

console.log(playerBoard.hasShipBetween([0, 2], [0, 4]));
console.log(playerBoard.board);
