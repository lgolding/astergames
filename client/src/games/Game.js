import { PLAYER1, PLAYER2 } from './constants';
import Point from './Point';

export default class Game {
  constructor() {
    this.currentPlayer = PLAYER1;

    // The point indices run in grid layout order, from 0 at the top left to 23
    // at the bottom right. From the point of view of the player at the bottom
    // ("light"), the points run from 24 at the top right to 1 at the bottom
    // right. From the point of view of the player at the top ("dark"), the
    // points run from 24 at the bottom right to 1 at the top right.
    this.points = [
      new Point(PLAYER1, 5),
      new Point(),
      new Point(),
      new Point(),
      new Point(PLAYER2, 3),
      new Point(),

      new Point(PLAYER2, 5),
      new Point(),
      new Point(),
      new Point(),
      new Point(),
      new Point(PLAYER1, 2),

      new Point(PLAYER2, 5),
      new Point(),
      new Point(),
      new Point(),
      new Point(PLAYER1, 3),
      new Point(),

      new Point(PLAYER1, 5),
      new Point(),
      new Point(),
      new Point(),
      new Point(),
      new Point(PLAYER2, 2),
    ];
  }

  // Convert from a "point index" (the index of a point in the
  // this.points array, which corresponds to grid layout order) to
  // a "point number" the conventional number of the point from the
  // point of view of the current player.
  pointIndexToPointNumber(pointIndex) {
    if (this.currentPlayer === PLAYER1) {
      return pointIndex < 12 ? 13 + pointIndex : 24 - pointIndex;
    } else {
      return pointIndex < 12 ? 12 - pointIndex : 1 + pointIndex;
    }
  }

  // Attempt to move a checker from the current player's "from" point
  // to that player's "to" point. Throw an error if the move is illegal.
  tryMove(from, to) {
    const fromPoint = this.points[from];
    const toPoint = this.points[to];

    if (fromPoint.playerIndex !== this.currentPlayer) {
      throw new Error('Cannot move from a point you do not occupy.');
    }

    if (from === to) {
      throw new Error('Cannot move to the point you started from.');
    }

    const legalDirection = this.currentPlayer === PLAYER1 ? +1 : -1;
    if (Math.sign(to - from) !== legalDirection) {
      throw new Error('Cannot move backwards');
    }

    const opponent = this.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;

    if (toPoint.playerIndex === opponent && toPoint.numCheckers > 1) {
      throw new Error(
        'Cannot move to a point non-blot point occupied by the opponent.'
      );
    }

    // TODO: Hit a blot.

    const newGame = this.clone();

    --newGame.points[from].numCheckers;
    ++newGame.points[to].numCheckers;
    newGame.points[to].playerIndex = this.currentPlayer;

    newGame.currentPlayer = opponent;

    return newGame;
  }

  /* private */ clone() {
    const newGame = new Game();
    newGame.points = this.points;
    return newGame;
  }
}
