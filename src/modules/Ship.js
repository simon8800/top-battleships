import { getPositionsBetween } from "./utils";

export default class Ship {
  constructor(name, length) {
    this._name = name;
    this._length = length;
    this._sunk = false;
    this._hits = 0;
    this._positions = [];
  }

  hit() {
    this._hits += 1;
  }

  isSunk() {
    return this._hits === this._length;
  }

  sink() {
    this._sunk = true;
  }

  // Accepts start and end positions and populates ship positions;
  addPositions(startPosition, endPosition) {
    this._positions = getPositionsBetween(startPosition, endPosition);
    return this._positions;
  }

  // getters and setters
  get name() {
    return this._name;
  }

  get positions() {
    return this._positions;
  }

  get hits() {
    return this._hits;
  }

  get length() {
    return this._length;
  }
}
