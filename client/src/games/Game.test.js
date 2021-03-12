import Game from './Game';

let game;

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  describe('tryMove', () => {
    it('cannot move to the point it started from', () => {
      expect(() => game.tryMove(0, 0)).toThrow();
    });

    it('cannot move from an empty point', () => {
      expect(() => game.tryMove(1, 2)).toThrow();
    });

    it('cannot move from a point occupied by the opponent', () => {
      expect(() => game.tryMove(4, 5)).toThrow();
    });

    it('cannot move to a non-blot point occupied by the opponent', () => {
      expect(() => game.tryMove(0, 4)).toThrow();
    });

    it('executes a legal move', () => {
      game = game.tryMove(0, 1);
      expect(game.points[0].numCheckers[0]).toBe(4);
      expect(game.points[1].numCheckers[0]).toBe(1);
    });

    it('alternates players', () => {
      expect(game.currentPlayer).toBe(0);

      game = game.tryMove(0, 1);
      expect(game.points[0].numCheckers[0]).toBe(4);
      expect(game.points[1].numCheckers[0]).toBe(1);
      expect(game.currentPlayer).toBe(1);

      game = game.tryMove(12, 2);
      expect(game.currentPlayer).toBe(0);
      expect(game.points[12].numCheckers[1]).toBe(4);
      expect(game.points[2].numCheckers[1]).toBe(1);
    });

    it('cannot move player 0 backwards', () => {
      expect(() => game.tryMove(11, 10)).toThrow();
    });

    it('cannot move player 1 backwards', () => {
      game = game.tryMove(0, 1);
      expect(game.points[0].numCheckers[0]).toBe(4);
      expect(game.points[1].numCheckers[0]).toBe(1);

      expect(game.currentPlayer).toBe(1);
      expect(() => game.tryMove(4, 5)).toThrow();
    });
  });
});
