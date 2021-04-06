import _ from 'lodash';
import produce, { immerable } from 'immer';
import { BAR_POINT_NUMBER, PLAYER1, PLAYER2, NUM_DIE_FACES } from './constants';
import PointModel from './PointModel';

export default class Game {
  [immerable] = true;
  currentPlayerIndex: number;
  remainingMoves: number[];
  points: PointModel[];
  bar: number[];

  constructor() {
    this.currentPlayerIndex = PLAYER1;
    this.remainingMoves = [];

    // The point indices run in grid layout order, from 0 at the top left to 23
    // at the bottom right. From the point of view of the player at the bottom
    // ("light"), the points run from 24 at the top right to 1 at the bottom
    // right. From the point of view of the player at the top ("dark"), the
    // points run from 24 at the bottom right to 1 at the top right.
    this.points = [
      new PointModel(PLAYER1, 5),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(PLAYER2, 3),
      new PointModel(),

      new PointModel(PLAYER2, 5),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(PLAYER1, 2),

      new PointModel(PLAYER2, 5),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(PLAYER1, 3),
      new PointModel(),

      new PointModel(PLAYER1, 5),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(),
      new PointModel(PLAYER2, 2),
    ];

    this.bar = [0, 0];
  }

  diceHaveBeenRolled = (): boolean => this.remainingMoves.length > 0;

  // Convert from a "point index" (the index of a point in the
  // this.points array, which corresponds to grid layout order) to
  // a "point number" (the conventional number of the point from the
  // point of view of the current player).
  pointIndexToPointNumber(pointIndex: number): number {
    if (this.currentPlayerIndex === PLAYER1) {
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
    if (this.currentPlayerIndex === PLAYER1) {
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
    const newGame = produce(this, draftGame => {
      draftGame.remainingMoves = Game.getMovesFromRoll(roll);
    });

    return newGame;
  }

  // Attempt to move a checker from the current player's "from" point
  // to that player's "to" point. Throw an error if the move is illegal.
  move(fromPointNumber: number, toPointNumber: number): Game {
    if (fromPointNumber === BAR_POINT_NUMBER) {
      if (this.bar[this.currentPlayerIndex] === 0) {
        throw new Error(
          'You cannot enter from the bar if you do not have a checker on the bar.'
        );
      }
    }

    if (
      this.bar[this.currentPlayerIndex] > 0 &&
      fromPointNumber !== BAR_POINT_NUMBER
    ) {
      throw new Error(
        'You cannot move from point to point if you have a checker on the bar.'
      );
    }

    if (toPointNumber > fromPointNumber) {
      throw new Error('Cannot move backwards');
    }

    if (toPointNumber === fromPointNumber) {
      throw new Error('Cannot move to the point you started from.');
    }

    let fromPointIndex: number | undefined = undefined;
    let fromPoint: PointModel | undefined = undefined;
    if (fromPointNumber !== BAR_POINT_NUMBER) {
      fromPointIndex = this.pointNumberToPointIndex(fromPointNumber);
      fromPoint = this.points[fromPointIndex];

      if (fromPoint.occupyingPlayerIndex !== this.currentPlayerIndex) {
        throw new Error('Cannot move from a point you do not occupy.');
      }
    }

    const toPointIndex = this.pointNumberToPointIndex(toPointNumber);
    const toPoint = this.points[toPointIndex];

    const moveLength = fromPointNumber - toPointNumber;

    if (moveLength > NUM_DIE_FACES) {
      throw new Error(`Cannot make a move longer than ${NUM_DIE_FACES}.`);
    }

    const index = _.indexOf(this.remainingMoves, moveLength);
    if (index === -1) {
      throw new Error(`You did not roll a ${moveLength}`);
    }

    const opponent = this.currentPlayerIndex === PLAYER1 ? PLAYER2 : PLAYER1;

    if (toPoint.occupyingPlayerIndex === opponent && toPoint.numCheckers > 1) {
      throw new Error(
        'Cannot move to a non-blot point occupied by the opponent.'
      );
    }

    const newGame = produce(this, draftGame => {
      if (fromPointIndex !== undefined) {
        --draftGame.points[fromPointIndex].numCheckers;
      } else {
        // The checker was entered from the bar.
        --draftGame.bar[this.currentPlayerIndex];
      }

      if (toPoint.occupyingPlayerIndex !== opponent) {
        // A normal move.
        ++draftGame.points[toPointIndex].numCheckers;
      } else {
        // Hit the blot.
        ++draftGame.bar[opponent];
      }

      draftGame.points[
        toPointIndex
      ].occupyingPlayerIndex = this.currentPlayerIndex;

      draftGame.remainingMoves = this.remainingMoves
        .slice(0, index)
        .concat(
          this.remainingMoves.slice(index + 1, this.remainingMoves.length)
        );

      if (draftGame.remainingMoves.length === 0) {
        draftGame.currentPlayerIndex = opponent;
      }
    });

    return newGame;
  }
}
