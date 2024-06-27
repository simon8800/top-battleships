const Gameboard = require("../src/modules/Gameboard");
const Ship = require("../src/modules/Ship");

const destroyer = new Ship("destroyer", 3);
const playerBoard = new Gameboard();

test("Place ship given start and end positions", () => {
  const startPosition = [0, 2];
  const endPosition = [0, 4];
  expect(playerBoard.placeShip(destroyer, startPosition, endPosition)).toBe(
    destroyer
  );
});
