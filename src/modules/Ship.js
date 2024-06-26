class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.sunk = false;
    this.hits = 0;
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
}
