export default class Player {
  constructor(playerType, gameboard) {
    this.score = 0;
    this.gameboard = gameboard;
    this.playerType = playerType; // player or cpu
  }
}
