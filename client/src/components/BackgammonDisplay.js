import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import MoveInput from './MoveInput';
import Game from '../games/Game';

const BackgammonDisplay = () => {
  const [game, setGame] = useState(new Game());

  // TODO: Extract and unit test this logic.
  const handleMove = (from, to) => {
    const newGame = { ...game };
    const fromPoint = newGame.points[from];
    const toPoint = newGame.points[to];
    const sourceCheckers =
      game.currentPlayer === 0 ? fromPoint.numLight : fromPoint.numDark;
    const destCheckers =
      game.currentPlayer === 0 ? toPoint.numLight : toPoint.numDark;
    if (sourceCheckers > 0) {
      if (game.currentPlayer === 0) {
        fromPoint.numLight = sourceCheckers - 1;
        toPoint.numLight = destCheckers + 1;
      } else {
        fromPoint.numDark = sourceCheckers - 1;
        toPoint.numDark = destCheckers + 1;
      }
      newGame.currentPlayer = game.currentPlayer === 0 ? 1 : 0;
      setGame(newGame);
    } else {
      alert(
        `There are no ${
          game.currentPlayer === 0 ? 'light' : 'dark'
        } checkers on point ${from}.`
      );
    }
  };

  return (
    <>
      <div>Current player: {game.currentPlayer}</div>
      <BackgammonBoard game={game} />
      <MoveInput onMove={handleMove} />
    </>
  );
};

export default BackgammonDisplay;
