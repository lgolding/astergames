import { useState, FunctionComponent } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

interface Props {
}

const BackgammonDisplay: FunctionComponent<Props> = () => {
  const [game, setGame] = useState(new Game());

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
      <DicePanel onRoll={handleRoll} />
    </>
  );
};

export default BackgammonDisplay;

// TODO: Keep state: don't allow drag if dice have not yet been rolled.
