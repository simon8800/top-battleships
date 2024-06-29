import Gameboard from "../src/modules/Gameboard";
import Ship from "../src/modules/Ship";

const playerBoard = new Gameboard();

describe("Board set up", () => {
  test("Board cells initialized with a 'ship' and 'hit' property", () => {
    expect(playerBoard.board[0][0]).toEqual({ hit: false, ship: 0 });
  });
});

describe("Placing ships", () => {
  const startPosition = [0, 2];
  const endPosition = [0, 4];
  const destroyer = new Ship("destroyer", 3);
  const carrier = new Ship("carrier", 5);

  test("Place ship given start and end positions", () => {
    expect(
      playerBoard.placeShip(destroyer, startPosition, endPosition)
    ).toEqual({ hit: false, ship: destroyer });
  });

  test("Can't place ship on top of another ship", () => {
    const startPosition = [0, 2];
    const endPosition = [0, 6];
    expect(playerBoard.placeShip(carrier, startPosition, endPosition)).toEqual(
      -1
    );
  });

  describe("Checking for ships", () => {
    beforeEach(() => {
      playerBoard.placeShip(destroyer, startPosition, endPosition);
    });

    test("Check for ship in position", () => {
      expect(
        playerBoard.hasShipInPosition(startPosition[0], startPosition[1])
      ).toBeTruthy();
    });

    test("Finds ship given occupied positions", () => {
      expect(
        playerBoard.hasShipBetween(startPosition, endPosition)
      ).toBeTruthy();
    });

    test("Finds no ship given empty positions", () => {
      expect(playerBoard.hasShipBetween([1, 0], [1, 5])).toBeFalsy();
    });
  });
});

describe("Receiving attacks", () => {
  beforeEach(() => {
    const destroyer = new Ship("destroyer", 3);
    const startPosition = [0, 2];
    const endPosition = [0, 4];
    playerBoard.placeShip(destroyer, startPosition, endPosition);
  });

  afterEach(() => {
    playerBoard.reset();
  });

  test("Hit spot", () => {
    expect(playerBoard.receiveAttack(0, 2)).toBeTruthy();
  });

  test("Ship got hit once", () => {
    playerBoard.receiveAttack(0, 2);
    let ship = playerBoard.getPosition(0, 2)["ship"];
    expect(ship.hits).toEqual(1);
  });

  test("Hitting the same spot is not allowed", () => {
    playerBoard.receiveAttack(0, 2);
    expect(playerBoard.receiveAttack(0, 2)).toBeFalsy();
  });
});
