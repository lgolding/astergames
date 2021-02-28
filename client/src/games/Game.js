import Point from './Point';

export default class Game {
  points;

  constructor() {
    // The point indices run in grid layout order, from 0 at the top left to 23
    // at the bottom right. From the point of view of the player at the bottom
    // ("light"), the points run from 24 at the top right to 1 at the bottom
    // right. From the point of view of the player at the top ("dark"), the
    // points run from 24 at the bottom right to 1 at the top right.
    this.points = new Array(24);

    this.points[0] = new Point(5, 0);
    this.points[1] = new Point(0, 0);
    this.points[2] = new Point(0, 0);
    this.points[3] = new Point(0, 0);
    this.points[4] = new Point(0, 3);
    this.points[5] = new Point(0, 0);

    this.points[6] = new Point(0, 5);
    this.points[7] = new Point(0, 0);
    this.points[8] = new Point(0, 0);
    this.points[9] = new Point(0, 0);
    this.points[10] = new Point(0, 0);
    this.points[11] = new Point(2, 0);

    this.points[12] = new Point(0, 5);
    this.points[13] = new Point(0, 0);
    this.points[14] = new Point(0, 0);
    this.points[15] = new Point(0, 0);
    this.points[16] = new Point(3, 0);
    this.points[17] = new Point(0, 0);

    this.points[18] = new Point(5, 0);
    this.points[19] = new Point(0, 0);
    this.points[20] = new Point(0, 0);
    this.points[21] = new Point(0, 0);
    this.points[22] = new Point(0, 0);
    this.points[23] = new Point(0, 2);
  }
}