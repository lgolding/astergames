import _ from 'lodash';
import { PLAYER1, PLAYER2, NUM_DIE_FACES } from './constants';
import Point from './Point';

export default class Game {
  currentPlayer: number;
  remainingMoves: number[];
  points: Point[];
  bar: number[];

  constructor() {
    this.currentPlayer = PLAYER1;
    this.remainingMoves = [];

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

    this.bar = [0, 0];
  }

  // Convert from a "point index" (the index of a point in the
  // this.points array, which corresponds to grid layout order) to
  // a "point number" (the conventional number of the point from the
  // point of view of the current player).
  pointIndexToPointNumber(pointIndex: number): number {
    if (this.currentPlayer === PLAYER1) {
      return pointIndex < 12 ? 13 + pointIndex : 24 - pointIndex;
    } else {
      return pointIndex < 12 ? 12 - pointIndex : 1 + pointIndex;
    }
  }

  // Convert from a "point number" (the conventional number of the point
  // from the point of view of the current player) to a "point index"
  // (the index of a point in the this.points array, which corresponds to
  // grid layout order.
  pointNumberToPointIndex(pointNumber: number): number {
    if (this.currentPlayer === PLAYER1) {
      return pointNumber > 12 ? pointNumber - 13 : 24 - pointNumber;
    } else {
      return pointNumber > 12 ? pointNumber - 1 : 12 - pointNumber;
    }
  }

  static getMovesFromRoll(roll: number[]): number[] {
    return roll[0] !== roll[1]
      ? roll // A normal roll.
      : [...roll, ...roll]; // Doubles.
  }

  startTurn(roll: number[]): Game {
    // TODO: This constant cloning is ridiculous. It's inefficient and it leads to bugs
    // where I forget to assign the new game back to the local variable.
    const newGame = this.clone();
    newGame.remainingMoves = Game.getMovesFromRoll(roll);
    return newGame;
  }

  // Attempt to move a checker from the current player's "from" point
  // to that player's "to" point. Throw an error if the move is illegal.
  move(fromPointNumber: number, toPointNumber: number) {
    const fromPointIndex = this.pointNumberToPointIndex(fromPointNumber);
    const fromPoint = this.points[fromPointIndex];

    const toPointIndex = this.pointNumberToPointIndex(toPointNumber);
    const toPoint = this.points[toPointIndex];

    if (toPointNumber > fromPointNumber) {
      throw new Error('Cannot move backwards');
    }

    if (toPointNumber === fromPointNumber) {
      throw new Error('Cannot move to the point you started from.');
    }

    if (fromPoint.playerIndex !== this.currentPlayer) {
      throw new Error('Cannot move from a point you do not occupy.');
    }

    const moveLength = fromPointNumber - toPointNumber;

    if (moveLength > NUM_DIE_FACES) {
      throw new Error(`Cannot make a move longer than ${NUM_DIE_FACES}.`);
    }

    const index = _.indexOf(this.remainingMoves, moveLength);
    if (index === -1) {
      throw new Error(`You did not roll a ${moveLength}`);
    }

    const opponent = this.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;

    if (toPoint.playerIndex === opponent && toPoint.numCheckers > 1) {
      throw new Error(
        'Cannot move to a non-blot point occupied by the opponent.'
      );
    }

    // TODO: Enter from bar.

    const newGame = this.clone();

    --newGame.points[fromPointIndex].numCheckers;

    if (toPoint.playerIndex !== opponent) {
      // A normal move.
      ++newGame.points[toPointIndex].numCheckers;
    } else {
      // Hit the blot.
      ++newGame.bar[opponent];
    }

    newGame.points[toPointIndex].playerIndex = this.currentPlayer;

    newGame.remainingMoves = this.remainingMoves
      .slice(0, index)
      .concat(this.remainingMoves.slice(index + 1, this.remainingMoves.length));

    if (newGame.remainingMoves.length === 0) {
      newGame.currentPlayer = opponent;
    }

    return newGame;
  }

  /* private */ clone() {
    const newGame = new Game();
    newGame.currentPlayer = this.currentPlayer;
    newGame.points = this.points;
    newGame.bar = this.bar;
    newGame.remainingMoves = this.remainingMoves;
    return newGame;
  }
}
