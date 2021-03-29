import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

const BackgammonDisplay = () => {
  const [game, setGame] = useState(new Game());

  const handleMove = (from, to) => {
    try {
      const newGame = game.move(from, to);
      setGame(newGame);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRoll = roll => {
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
