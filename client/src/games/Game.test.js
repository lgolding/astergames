import Game from './Game';

describe('Game', () => {
  describe('tryMove', () => {
    it('executes a legal move', () => {
      const game = new Game();
      const newGame = game.tryMove(0, 1);
      expect(newGame.points[0].numLight).toBe(4);
      expect(newGame.points[1].numLight).toBe(1);
    });

    it('does not move from an empty point', () => {
      const game = new Game();
      expect(() => game.tryMove(1, 2)).toThrow();
    });

    it('does not move from a point occupied by the opponent', () => {
      const game = new Game();
      expect(() => game.tryMove(4, 5)).toThrow();
    });

    xit('does not move to a point occupied by the opponent', () => {
      const game = new Game();
      expect(() => game.tryMove(0, 4)).toThrow();
    });
  });
});
