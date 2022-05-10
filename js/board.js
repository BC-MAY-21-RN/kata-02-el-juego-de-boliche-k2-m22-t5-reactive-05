import Round from "./Round";

export default class Board {
  constructor() {
    this.gameBoard = new Array(10);
    this.totalScore = 0;
  }
  
  totalScore() {
    return this.gameBoard.reduce((turno1, turno2) => turno1 + turno2);
  }

  game(){
    for(let i=0; i < this.gameBoard.length(); i += 1){
      const round = new Round();
      this.gameBoard.push(round)
    }
  }
}
