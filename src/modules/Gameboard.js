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
  placeShip(ship, startPosition, endPosition) {
    this.ships.push(ship);
    ship.addPositions(startPosition, endPosition);
    let shipPositions = ship.positions;

    shipPositions.forEach((position) => {
      this.board[position[0]][position[1]] = ship;
    });

    return this.board[startPosition[0]][startPosition[1]];
  }
}

module.exports = Gameboard;
