import Point from './Point';

export default class Game {
  points;
  currentPlayer;

  constructor() {
    this.currentPlayer = 0;

    // The point indices run in grid layout order, from 0 at the top left to 23
    // at the bottom right. From the point of view of the player at the bottom
    // ("light"), the points run from 24 at the top right to 1 at the bottom
    // right. From the point of view of the player at the top ("dark"), the
    // points run from 24 at the bottom right to 1 at the top right.
    this.points = [
      new Point(5, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 3),
      new Point(0, 0),

      new Point(0, 5),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(2, 0),

      new Point(0, 5),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(3, 0),
      new Point(0, 0),

      new Point(5, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 0),
      new Point(0, 2),
    ];
  }

  // TODO: Unit test this logic.
  tryMove(from, to) {
    const newGame = { ...this };
    const fromPoint = newGame.points[from];
    const toPoint = newGame.points[to];
    const sourceCheckers =
      this.currentPlayer === 0 ? fromPoint.numLight : fromPoint.numDark;
    const destCheckers =
      this.currentPlayer === 0 ? toPoint.numLight : toPoint.numDark;
    if (sourceCheckers > 0) {
      if (this.currentPlayer === 0) {
        fromPoint.numLight = sourceCheckers - 1;
        toPoint.numLight = destCheckers + 1;
      } else {
        fromPoint.numDark = sourceCheckers - 1;
        toPoint.numDark = destCheckers + 1;
      }
      newGame.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
      return newGame;
    } else {
      throw new Error(
        `There are no ${
          this.currentPlayer === 0 ? 'light' : 'dark'
        } checkers on point ${from}.`
      );
    }
  }
}
