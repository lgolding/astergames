import './backgammon.css';
import { useState } from 'react';
import Point from './Point';
import Bar from './Bar';
import Game from '../games/Game';
import { POINTS_ON_BOARD, POINTS_ON_TABLE } from '../games/constants';

const BackgammonBoard = () => {
  let [game, setGame] = useState(new Game());
  let indices = Array.from(Array(POINTS_ON_BOARD).keys());

  // We render the first 6 points (the top left table). The bar spans two rows
  // in the grid, so after rendering the bar, we can render the remaining 18
  // points without interruption.
  return (
    <div className='board'>
      {indices.slice(0, POINTS_ON_TABLE).map(index => (
        <Point index={index} point={game.points[index]} />
      ))}

      <Bar />

      {indices.slice(POINTS_ON_TABLE, POINTS_ON_BOARD).map(index => (
        <Point index={index} point={game.points[index]} />
      ))}
    </div>
  );
};

export default BackgammonBoard;
