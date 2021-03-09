import Point from './Point';

export default class Game {
  points;

  constructor() {
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
}
