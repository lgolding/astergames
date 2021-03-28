import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

const BackgammonDisplay = () => {
  const [game, setGame] = useState(new Game());

  const handleMove = (from, to) => {
    try {
      const newGame = game.tryMove(from, to);
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
      <div>Current player: {game.currentPlayer}</div>
      <BackgammonBoard game={game} onMove={handleMove} />
      <DicePanel onRoll={handleRoll} />
    </>
  );
};

export default BackgammonDisplay;
