import { getPositionsBetween } from "./utils";

export default class Gameboard {
  constructor() {
    this.board = this._createBoard();
    this.ships = [];
    this.sunkShips = 0;
  }

  reset() {
    this.board = this._createBoard();
    this.ships = [];
  }

  // Take coordinates and check if a ship has been hit
  // Returns boolean if valid or invalid spot to hit
  receiveAttack(x, y) {
    let position = this.getPosition(x, y);

    if (!position["hit"]) {
      position["hit"] = true;
      if (this.hasShipInPosition(x, y)) position["ship"].hit();
      return true;
    } else {
      return false;
    }
  }

  // Get cell at specified position
  getPosition(x, y) {
    return this.board[x][y];
  }

  // Checks for ship at specified position
  hasShipInPosition(x, y) {
    let position = this.getPosition(x, y);
    return position["ship"] !== 0;
  }

  // Add ships to the board as users/computer places them on the board
  placeShip(ship, startPosition, endPosition) {
    if (this.hasShipBetween(startPosition, endPosition)) return -1;

    this.ships.push(ship);
    ship.addPositions(startPosition, endPosition);

    ship.positions.forEach((position) => {
      let x = position[0];
      let y = position[1];
      this.board[x][y]["ship"] = ship;
    });

    return this.board[startPosition[0]][startPosition[1]];
  }

  // Check if there's a ship at the given positions
  hasShipBetween(startPosition, endPosition) {
    let positions = getPositionsBetween(startPosition, endPosition);
    for (let position of positions) {
      let x = position[0];
      let y = position[1];
      if (this.hasShipInPosition(x, y)) return true;
    }
    return false;
  }

  allShipsSunk() {
    return this.ships.length === this.sunkShips;
  }

  _createBoard() {
    let board = [];

    for (let row = 0; row < 10; row++) {
      let currentRow = [];
      for (let column = 0; column < 10; column++) {
        let cell = { hit: false, ship: 0 };
        currentRow.push(cell);
      }
      board.push(currentRow);
    }

    return board;
  }
}
