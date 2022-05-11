const Board = require('./board.js');

function nuevoJuego() {
  const tablero = new Board();
  tablero.game();
  tablero.setNewScores();
  tablero.printBoard();
}

nuevoJuego();