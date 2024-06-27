const Ship = require("../src/modules/Ship");

const carrier = new Ship("carrier", 5);
const battleship = new Ship("battleship", 4);
const destroyer = new Ship("destroyer", 3);
const submarine = new Ship("submarine", 3);
const patrolBoat = new Ship("patrol boat", 2);

describe("Ship properties", () => {
  test("Ship length", () => {
    expect(carrier.length).toBe(5);
  });
});

describe("Ship methods", () => {
  test("Add horizontal positions to ship", () => {
    expect(carrier.addPositions([0, 0], [0, 4])).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
  });

  test("Carrier is sunk after 5 hits", () => {
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();
    carrier.hit();

    expect(carrier.isSunk()).toBeTruthy();
  });
});
