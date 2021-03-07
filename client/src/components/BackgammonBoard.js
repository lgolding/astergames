import './backgammon.css';
import { useState } from 'react';
import Point from './Point';
import Bar from './Bar';
import Game from '../games/Game';
import { POINTS_ON_BOARD, POINTS_ON_TABLE } from '../games/constants';

const BackgammonBoard = () => {
  let [game, setGame] = useState(new Game());
  let indices = Array.from(Array(POINTS_ON_BOARD).keys());

  return (
    <div className='board'>
      {indices.slice(0, POINTS_ON_BOARD).map(pointIndex => (
        <Point pointIndex={pointIndex} point={game.points[pointIndex]} />
      ))}

      <Bar />
    </div>
  );
};

export default BackgammonBoard;
