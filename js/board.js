const Round = require("../js/round.js");

class Board {
  constructor() {
    this.gameBoard = new Array();
    this.totalScore = new Array();
    this.extraPointTenth = 0;
  }

  game() {
    for (let i = 0; i < 10; i += 1) {
      const round = new Round();
      round.runRound();
      this.gameBoard.push(round);
    }
  }

  setNewScores() {
    let total = 0;
    if (this.gameBoard[9].score === 10) {
      this.extraPointTenth = Math.floor(Math.random() * 11);
      this.gameBoard[9].score += this.extraPointTenth;
    }

    for (let i = 0; i < 9; i += 1) {
      const tiroActual = this.gameBoard[i];
      const tiroSiguiente = this.gameBoard[i + 1];
      if (tiroActual.isStrike()) {
        tiroActual.setScore(tiroSiguiente.score);
      } else if (tiroActual.isSpare()) {
        tiroActual.setScore(tiroSiguiente.getTiroUno());
      }
      total += tiroActual.score;
      this.totalScore.push(total);
    }
    total += this.gameBoard[9].score;
    this.totalScore.push(total);
  }

  printBoard() {
    let cadena = "";
    for (let i = 0; i < 10; i += 1) {
      const ronda = this.gameBoard[i];
        if(ronda.score<10){
            cadena +=
          "| " +
          ronda.getTiroUno() +
          " | " +
          ronda.getTiroDos() +
          " | ";
          cadena += this.totalScore[i] +"\n";
        }else{
          if(ronda.isSpare()){
            cadena +=
          "| " +
          ronda.getTiroUno() +
          " | / | "
          +  this.totalScore[i] + "\n";
          }
          if(ronda.isStrike()){
            cadena +=
            "|   | X | "
            +  this.totalScore[i] + "\n";
          }
        }
    }
    console.log(cadena);
  }
}

module.exports = Board;
