class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
    this.ships = [];
  }

  // Take coordinates and check if a ship has been hit
  receiveAttack(x, y) {
    return;
  }

  // Add ships to the board as users/computer places them on the board
  addShip(ship) {
    return;
  }
}

module.exports = Gameboard;