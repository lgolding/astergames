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

  tryMove(from, to) {
    const fromPoint = this.points[from];
    const toPoint = this.points[to];

    const sourceCheckers = fromPoint.numCheckers[this.currentPlayer];
    const destCheckers = toPoint.numCheckers[this.currentPlayer];

    if (sourceCheckers === 0) {
      throw new Error('Cannot move from a point you do not occupy.');
    }

    if (from === to) {
      throw new Error('Cannot move to the point you started from.');
    }

    const opponent = 1 - this.currentPlayer;

    const opponentDestCheckers = toPoint.numCheckers[opponent];
    if (opponentDestCheckers > 1) {
      throw new Error(
        'Cannot move to a point non-blot point occupied by the opponent.'
      );
    }

    const newGame = this.clone();

    newGame.points[from].numCheckers[this.currentPlayer] = sourceCheckers - 1;
    newGame.points[to].numCheckers[this.currentPlayer] = destCheckers + 1;

    newGame.currentPlayer = opponent;

    return newGame;
  }

  /* private */ clone() {
    const newGame = new Game();
    newGame.points = this.points;
    return newGame;
  }
}
