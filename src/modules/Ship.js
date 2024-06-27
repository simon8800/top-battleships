class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.sunk = false;
    this.hits = 0;
    this.positions = [];
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }

  sink() {
    this.sunk = true;
  }

  // Accepts start and end positions and populates ship positions;
  addPositions(startPosition, endPosition) {
    let startY = startPosition[1];
    let endY = endPosition[1];
    let x = startPosition[0];

    for (let y = startY; y <= endY; y++) {
      let position = [x, y];
      this.positions.push(position);
    }
    return this.positions;
  }
}

module.exports = Ship;
