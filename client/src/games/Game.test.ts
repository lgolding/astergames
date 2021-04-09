import Game from './Game';
import {
  BAR_POINT_NUMBER,
  NO_PLAYER,
  NUM_DICE,
  PLAYER1,
  PLAYER2,
} from './constants';

let game: Game;

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  describe('pointIndexToPointNumber', () => {
    it('correctly converts a normal point', () => {
      game.currentPlayerIndex = PLAYER1;
      expect(game.pointIndexToPointNumber(0)).toBe(13);
      expect(game.pointIndexToPointNumber(23)).toBe(1);
      expect(game.pointIndexToPointNumber(11)).toBe(24);
      expect(game.pointIndexToPointNumber(12)).toBe(12);

      game.currentPlayerIndex = PLAYER2;
      expect(game.pointIndexToPointNumber(0)).toBe(12);
      expect(game.pointIndexToPointNumber(23)).toBe(24);
      expect(game.pointIndexToPointNumber(11)).toBe(1);
      expect(game.pointIndexToPointNumber(12)).toBe(13);
    });

    it('correctly converts the bar "point"', () => {
      game.currentPlayerIndex = PLAYER1;
      expect(game.pointIndexToPointNumber(BAR_POINT_NUMBER)).toBe(
        BAR_POINT_NUMBER
      );

      game.currentPlayerIndex = PLAYER2;
      expect(game.pointIndexToPointNumber(BAR_POINT_NUMBER)).toBe(
        BAR_POINT_NUMBER
      );
    });
  });

  describe('move', () => {
    it('rolls a normal move', () => {
      game = game.startTurn([5, 3]);
      expect(game.remainingMoves.length).toBe(NUM_DICE);
      expect(game.remainingMoves[0]).toBe(5);
      expect(game.remainingMoves[1]).toBe(3);
    });

    it('rolls doubles', () => {
      const FACE = 6;
      game = game.startTurn([FACE, FACE]);
      expect(game.remainingMoves.length).toBe(2 * NUM_DICE);
      game.remainingMoves.forEach(face => expect(face).toBe(FACE));
    });

    it('cannot move to the point it started from', () => {
      expect(() => game.move(24, 24)).toThrow();
    });

    it('cannot move from an empty point', () => {
      expect(() => game.move(23, 22)).toThrow();
    });

    it('cannot move from a point occupied by the opponent', () => {
      expect(() => game.move(12, 10)).toThrow();
    });

    it('cannot move to a non-blot point occupied by the opponent', () => {
      expect(() => game.move(13, 12)).toThrow();
    });

    it('cannot make a move that was not rolled', () => {
      game = game.startTurn([5, 3]);
      expect(() => game.move(13, 11)).toThrow();
    });

    it('executes a normal move', () => {
      game = game.startTurn([3, 4]);
      game = game.move(13, 9);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[15].numCheckers).toBe(1);
    });

    it('executes a doubles move', () => {
      game = game.startTurn([1, 1]);
      game = game.move(24, 23);
      game = game.move(24, 23);
      game = game.move(23, 22);
      game = game.move(22, 21);

      expect(game.points[11].numCheckers).toBe(0);
      expect(game.points[10].numCheckers).toBe(1);
      expect(game.points[10].occupyingPlayerIndex).toBe(PLAYER1);
      expect(game.points[9].numCheckers).toBe(0);
      expect(game.points[8].numCheckers).toBe(1);
      expect(game.points[8].occupyingPlayerIndex).toBe(PLAYER1);
    });

    it('alternates players', () => {
      expect(game.currentPlayerIndex).toBe(PLAYER1);

      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[13].numCheckers).toBe(1);
      expect(game.points[13].occupyingPlayerIndex).toBe(PLAYER1);
      expect(game.currentPlayerIndex).toBe(PLAYER1);

      game = game.move(13, 10);
      expect(game.points[0].numCheckers).toBe(3);
      expect(game.points[14].numCheckers).toBe(1);
      expect(game.points[14].occupyingPlayerIndex).toBe(PLAYER1);
      expect(game.currentPlayerIndex).toBe(PLAYER2);

      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      expect(game.points[12].numCheckers).toBe(4);
      expect(game.points[1].numCheckers).toBe(1);
      expect(game.points[1].occupyingPlayerIndex).toBe(PLAYER2);
      expect(game.currentPlayerIndex).toBe(PLAYER2);

      game = game.move(13, 10);
      expect(game.points[12].numCheckers).toBe(3);
      expect(game.points[2].numCheckers).toBe(1);
      expect(game.points[2].occupyingPlayerIndex).toBe(PLAYER2);
      expect(game.currentPlayerIndex).toBe(PLAYER1);
    });

    it('cannot move player 1 backwards', () => {
      expect(() => game.move(8, 14)).toThrow();
    });

    it('cannot move player 2 backwards', () => {
      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      game = game.move(13, 10);
      expect(game.currentPlayerIndex).toBe(PLAYER2);

      game = game.startTurn([2, 3]);

      expect(() => game.move(13, 14)).toThrow();
    });

    it('cannot move farther than the maximum die face', () => {
      expect(() => game.move(13, 6)).toThrow();
    });

    it('hits a blot', () => {
      game = game.startTurn([1, 2]);

      game = game.move(24, 23);
      game = game.move(24, 22);

      game = game.startTurn([4, 3]);

      game = game.move(6, 2);
      game = game.move(6, 3);

      expect(game.points[6].numCheckers).toBe(3);
      expect(game.points[6].occupyingPlayerIndex).toBe(PLAYER2);

      expect(game.points[9].numCheckers).toBe(1);
      expect(game.points[9].occupyingPlayerIndex).toBe(PLAYER2);

      expect(game.points[10].numCheckers).toBe(1);
      expect(game.points[10].occupyingPlayerIndex).toBe(PLAYER2);

      expect(game.points[11].numCheckers).toBe(0);

      expect(game.bar[PLAYER1]).toBe(2);
      expect(game.bar[PLAYER2]).toBe(0);
    });

    it('cannot enter if there are no checkers on the bar', () => {
      game = game.startTurn([1, 2]);
      game = game.move(24, 23);
      game = game.move(24, 22);

      game = game.startTurn([1, 2]);

      game = game.move(6, 5);
      game = game.move(6, 4);

      game = game.startTurn([1, 2]);

      expect(() => game.move(BAR_POINT_NUMBER, 24)).toThrow();
    });

    it('enters from the bar to an empty point', () => {
      game = game.startTurn([1, 2]);
      game = game.move(24, 23);
      game = game.move(24, 22);

      game = game.startTurn([4, 3]);

      game = game.move(6, 2);
      expect(game.bar[PLAYER1]).toBe(1);

      game = game.move(6, 3);
      expect(game.bar[PLAYER1]).toBe(2);

      game = game.startTurn([1, 4]);

      game = game.move(BAR_POINT_NUMBER, 24);
      expect(game.bar[PLAYER1]).toBe(1);
      expect(game.points[11].numCheckers).toBe(1);
      expect(game.points[11].occupyingPlayerIndex).toBe(PLAYER1);

      game = game.move(BAR_POINT_NUMBER, 21);
      expect(game.bar[PLAYER1]).toBe(0);
      expect(game.points[11].numCheckers).toBe(1);
      expect(game.points[11].occupyingPlayerIndex).toBe(PLAYER1);
      expect(game.points[8].numCheckers).toBe(1);
      expect(game.points[8].occupyingPlayerIndex).toBe(PLAYER1);
    });

    it('enters from the bar and hits a blot', () => {
      game = game.startTurn([1, 2]);
      game = game.move(24, 23);
      game = game.move(24, 22);

      game = game.startTurn([4, 3]);

      game = game.move(6, 2);
      expect(game.bar[PLAYER1]).toBe(1);
      expect(game.points[10].occupyingPlayerIndex).toBe(PLAYER2);
      expect(game.points[10].numCheckers).toBe(1);

      game = game.move(6, 3);
      expect(game.bar[PLAYER1]).toBe(2);
      expect(game.points[9].occupyingPlayerIndex).toBe(PLAYER2);
      expect(game.points[9].numCheckers).toBe(1);

      game = game.startTurn([1, 2]);

      game = game.move(BAR_POINT_NUMBER, 23);
      expect(game.bar[PLAYER1]).toBe(1);
      expect(game.points[10].occupyingPlayerIndex).toBe(PLAYER1);
      expect(game.points[10].numCheckers).toBe(1);
    });

    it('cannot move from point to point if a checker can be entered from the bar', () => {
      game = game.startTurn([1, 2]);
      game = game.move(24, 23);
      game = game.move(24, 22);

      game = game.startTurn([4, 3]);

      game = game.move(6, 2);
      game = game.move(6, 3);

      game = game.startTurn([6, 4]);

      expect(() => game.move(13, 7)).toThrow();
    });

    it('marks a point as "unoccupied" when the last checker is moved from it', () => {
      expect(game.points[11].numCheckers).toBe(2);
      expect(game.points[11].occupyingPlayerIndex).toBe(PLAYER1);

      game = game.startTurn([1, 2]);
      game = game.move(24, 23);
      game = game.move(24, 22);

      expect(game.points[11].numCheckers).toBe(0);
      expect(game.points[11].occupyingPlayerIndex).toBe(NO_PLAYER);
    });
  });
});
