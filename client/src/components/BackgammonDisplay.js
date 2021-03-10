import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import Game from '../games/Game';
import Point from '../games/Point';

const BackgammonDisplay = () => {
  const [game, setGame] = useState(new Game());
  const handleClick = () => {
    const newGame = { ...game };
    newGame.points[0] = new Point(3, 0);
    newGame.points[1] = new Point(2, 0);
    setGame(newGame);
  };

  return (
    <>
      <BackgammonBoard game={game} handleClick={handleClick} />
    </>
  );
};

export default BackgammonDisplay;
