import { NO_PLAYER } from './constants';

export default class Point {
  constructor(playerIndex = NO_PLAYER, numCheckers = 0) {
    this.playerIndex = playerIndex;
    this.numCheckers = numCheckers;
  }
}
