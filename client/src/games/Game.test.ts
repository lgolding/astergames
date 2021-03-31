import Game from './Game';
import { NUM_DICE, PLAYER1, PLAYER2 } from './constants';

let game: Game;

beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
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
      expect(game.points[10].playerIndex).toBe(PLAYER1);
      expect(game.points[9].numCheckers).toBe(0);
      expect(game.points[8].numCheckers).toBe(1);
      expect(game.points[8].playerIndex).toBe(PLAYER1);
    });

    it('alternates players', () => {
      expect(game.currentPlayer).toBe(PLAYER1);

      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      expect(game.points[0].numCheckers).toBe(4);
      expect(game.points[13].numCheckers).toBe(1);
      expect(game.points[13].playerIndex).toBe(PLAYER1);
      expect(game.currentPlayer).toBe(PLAYER1);

      game = game.move(13, 10);
      expect(game.points[0].numCheckers).toBe(3);
      expect(game.points[14].numCheckers).toBe(1);
      expect(game.points[14].playerIndex).toBe(PLAYER1);
      expect(game.currentPlayer).toBe(PLAYER2);

      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      expect(game.points[12].numCheckers).toBe(4);
      expect(game.points[1].numCheckers).toBe(1);
      expect(game.points[1].playerIndex).toBe(PLAYER2);
      expect(game.currentPlayer).toBe(PLAYER2);

      game = game.move(13, 10);
      expect(game.points[12].numCheckers).toBe(3);
      expect(game.points[2].numCheckers).toBe(1);
      expect(game.points[2].playerIndex).toBe(PLAYER2);
      expect(game.currentPlayer).toBe(PLAYER1);
    });

    it('cannot move player 1 backwards', () => {
      expect(() => game.move(8, 14)).toThrow();
    });

    it('cannot move player 2 backwards', () => {
      game = game.startTurn([2, 3]);

      game = game.move(13, 11);
      game = game.move(13, 10);
      expect(game.currentPlayer).toBe(PLAYER2);

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
      expect(game.points[6].playerIndex).toBe(PLAYER2);

      expect(game.points[9].numCheckers).toBe(1);
      expect(game.points[9].playerIndex).toBe(PLAYER2);

      expect(game.points[10].numCheckers).toBe(1);
      expect(game.points[10].playerIndex).toBe(PLAYER2);

      expect(game.points[11].numCheckers).toBe(0);

      expect(game.bar[PLAYER1]).toBe(2);
      expect(game.bar[PLAYER2]).toBe(0);
    });
  });
});
