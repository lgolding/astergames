import { NO_PLAYER } from './constants';

export default class PointModel {
  occupyingPlayerIndex: number;
  numCheckers: number;
  constructor(playerIndex = NO_PLAYER, numCheckers = 0) {
    this.occupyingPlayerIndex = playerIndex;
    this.numCheckers = numCheckers;
  }
}
