class Round {
  constructor() {
    this.tiroUno = 0;
    this.tiroDos = 0;
    this.score = 0;
  }

  getTiroUno() {
    return this.tiroUno;
  }

  getTiroDos() {
    return this.tiroDos;
  }

  isSpare() {
    if(this.tiroUno === 10){
        return false;
    }
    return this.tiroUno + this.tiroDos ===10;
  }

  isStrike() {
    return this.tiroUno === 10;
  }

  getRound1() {
    return Math.floor(Math.random() * 11);
  }

  getRound2() {
    const maxPinos = 11 - this.tiroUno;
    return Math.floor(Math.random() * maxPinos);
  }

  runRound() {
    this.tiroUno = this.getRound1();
    this.tiroDos = this.getRound2();
    this.score = this.tiroUno + this.tiroDos;
  }

  setScore(nextRoundScore){
      this.score += nextRoundScore;
  }
}

module.exports = Round;

/**
 * 
 * primer ronda
 *  3
 *  7
 *  / 18
 * segundo ronda
 *  8
 *  2
 *  / 12
 * tercera ronda
 * 2
 * 4
 * 6
 * cuarta ronda
 *  10
 *  - 
 *  X 18
 * quinta ronda
 * 5
 * 3
 */