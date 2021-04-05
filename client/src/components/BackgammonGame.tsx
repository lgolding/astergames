import { useState, FunctionComponent } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

interface Props {
}

const BackgammonGame: FunctionComponent<Props> = () => {
  const [game, setGame] = useState(new Game());
  const moveInProgress: boolean = game.remainingMoves.length > 0;

  const handleMove = (fromPointNumber: number, toPointNumber: number) => {
    try {
      const newGame = game.move(fromPointNumber, toPointNumber);
      setGame(newGame);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRoll = (roll: number[]) => {
    const newGame = game.startTurn(roll);
    setGame(newGame);
  };

  return (
    <>
      <div>Current player: {game.currentPlayer + 1}</div>
      <BackgammonBoard game={game} onMove={handleMove} />
      <DicePanel onRoll={handleRoll} moveInProgress={moveInProgress} />
    </>
  );
};

export default BackgammonGame;

// TODO: Keep state: don't allow drag if dice have not yet been rolled.
