class Player {
  constructor(gameboard, playerType) {
    this.score = 0;
    this.gameboard = gameboard;
    this.playerType = playerType; // player or cpu
  }
}

module.exports = Player;