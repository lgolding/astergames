import Game from './Game';
import { PLAYER1, PLAYER2 } from './constants';

let game;

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  describe('tryMove', () => {
    it('cannot move to the point it started from', () => {
      expect(() => game.tryMove(24, 24)).toThrow();
    });

    it('cannot move from an empty point', () => {
      expect(() => game.tryMove(23, 22)).toThrow();
    });

    it('cannot move from a point occupied by the opponent', () => {
      expect(() => game.tryMove(12, 10)).toThrow();
    });

    it('cannot move to a non-blot point occupied by the opponent', () => {
      expect(() => game.tryMove(13, 12)).toThrow();
    });

    it('executes a legal move', () => {
      game = game.tryMove(13, 9);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[15].numCheckers).toBe(1);
    });

    it('alternates players', () => {
      expect(game.currentPlayer).toBe(PLAYER1);

      game = game.tryMove(13, 11);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[13].numCheckers).toBe(1);
      expect(game.points[13].playerIndex).toBe(PLAYER1);
      expect(game.currentPlayer).toBe(PLAYER2);

      game = game.tryMove(13, 11);
      expect(game.points[12].numCheckers).toBe(4);
      expect(game.points[1].numCheckers).toBe(1);
      expect(game.points[1].playerIndex).toBe(PLAYER2);
      expect(game.currentPlayer).toBe(PLAYER1);
    });

    it('cannot move player 0 backwards', () => {
      expect(() => game.tryMove(8, 14)).toThrow();
    });

    it('cannot move player 1 backwards', () => {
      game = game.tryMove(13, 11);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[13].numCheckers).toBe(1);

      expect(game.currentPlayer).toBe(PLAYER2);
      expect(() => game.tryMove(17, 11)).toThrow();
    });
  });
});
