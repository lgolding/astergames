import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import Game from '../games/Game';

const BackgammonDisplay = () => {
  let [game, setGame] = useState(new Game());
  let handleClick = () => alert('click!');

  return (
    <>
      <BackgammonBoard game={game} handleClick={handleClick} />
    </>
  );
};

export default BackgammonDisplay;
