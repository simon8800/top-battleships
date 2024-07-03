import Ship from "./Ship";

export default class Player {
  constructor(type, gameboard, name) {
    this.score = 0;
    this.name = name;
    this.gameboard = gameboard;
    this.type = type; // player or cpu
    this.shipGenerator();
  }

  shipGenerator() {
    let shipsData = [
      { name: "carrier", length: 5 },
      { name: "battleship", length: 4 },
      { name: "destroyer", length: 3 },
      { name: "submarine", length: 3 },
      { name: "patrol boat", length: 2 },
    ];

    let ships = [];
    for (let shipData of shipsData) {
      let ship = new Ship(shipData.name, shipData.length);
      ships.push(ship);
    }

    for (let ship of ships) {
      let placedShipSuccessfully = false;
      while (!placedShipSuccessfully) {
        let x = this.coordinateGenerator();
        let y = this.coordinateGenerator();
        let startPosition = [x, y];
        let endPosition = [x, y + ship.length - 1];
        placedShipSuccessfully =
          this.gameboard.placeShip(ship, startPosition, endPosition) !== -1
            ? true
            : false;
      }
    }
  }

  coordinateGenerator() {
    return Math.floor(Math.random() * 10);
  }

  randomHit(gameboard) {
    let landHit = false;
    let coordinates = [];
    while (!landHit) {
      let x = this.coordinateGenerator();
      let y = this.coordinateGenerator();
      coordinates = [x, y];
      landHit = gameboard.receiveAttack(x, y) ? true : false;
    }

    return coordinates;
  }
}
