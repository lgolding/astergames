import { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import Game from '../games/Game';

const BackgammonDisplay = () => {
  let [game, setGame] = useState(new Game());

  return (
    <>
      <BackgammonBoard game={game} />
    </>
  );
};

export default BackgammonDisplay;
