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

  return (
    <>
      <div>Current player: {game.currentPlayer}</div>
      <BackgammonBoard game={game} onMove={handleMove} />
      <DicePanel />
    </>
  );
};

export default BackgammonDisplay;
