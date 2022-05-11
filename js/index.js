/* eslint-disable no-console */
const Board = require('./board');

function nuevoJuego() {
  const tablero = new Board();
  tablero.game();
  tablero.setNewScores();
  console.log(tablero.printBoard());
}

nuevoJuego();
