import { NO_PLAYER } from './constants';

export default class Point {
  playerIndex: number;
  numCheckers: number;
  constructor(playerIndex = NO_PLAYER, numCheckers = 0) {
    this.playerIndex = playerIndex;
    this.numCheckers = numCheckers;
  }
}
