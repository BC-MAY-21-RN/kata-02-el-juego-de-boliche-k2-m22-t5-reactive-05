const Round = require("../js/round.js");

const testRound = new Round();
testRound.runRound();
const round1 = testRound.tiroUno;
const round2 = testRound.tiroDos;

describe("Pruebas de clase Round", () => {
  test("get Round 1", () => {
    expect(round1).toBeLessThanOrEqual(10);
    expect(round1).toBeGreaterThanOrEqual(0);
  });

  test("get Round 2", () => {
    expect(round2).toBeLessThanOrEqual(10);
    expect(round2).toBeGreaterThanOrEqual(0);
  });

  test("Suma de tiros", () => {
    expect(round1 + round2).toBeGreaterThanOrEqual(0);
    expect(round1 + round2).toBeLessThanOrEqual(10);
  });

  test("is Spare", () => {
    console.log(testRound.tiroUno);
    console.log(testRound.tiroDos);
    console.log(testRound.score);
    console.log(testRound.isSpare());
    expect(typeof testRound.isSpare()).toBe("boolean");
  });

  test("is Strike", () => {
    console.log(testRound.isStrike());
    expect(typeof testRound.isStrike()).toBe("boolean");
  });
});
