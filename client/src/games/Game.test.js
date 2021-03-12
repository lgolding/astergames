import Game from './Game';

describe('Game', () => {
  describe('tryMove', () => {
    it('cannot move to the point it started from', () => {
      const game = new Game();
      expect(() => game.tryMove(0, 0)).toThrow();
    });

    it('cannot move from an empty point', () => {
      const game = new Game();
      expect(() => game.tryMove(1, 2)).toThrow();
    });

    it('cannot move from a point occupied by the opponent', () => {
      const game = new Game();
      expect(() => game.tryMove(4, 5)).toThrow();
    });

    it('cannot move to a non-blot point occupied by the opponent', () => {
      const game = new Game();
      expect(() => game.tryMove(0, 4)).toThrow();
    });

    it('executes a legal move', () => {
      const game = new Game();
      const newGame = game.tryMove(0, 1);
      expect(newGame.points[0].numCheckers[0]).toBe(4);
      expect(newGame.points[1].numCheckers[0]).toBe(1);
    });
  });
});
