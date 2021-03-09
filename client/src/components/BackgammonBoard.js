import './backgammon.css';
import Point from './Point';
import Bar from './Bar';
import { POINTS_ON_BOARD } from '../games/constants';

const BackgammonBoard = ({ game, handleClick }) => {
  let indices = Array.from(Array(POINTS_ON_BOARD).keys());

  return (
    <div className='board' onClick={handleClick}>
      {indices.slice(0, POINTS_ON_BOARD).map(pointIndex => (
        <Point pointIndex={pointIndex} point={game.points[pointIndex]} />
      ))}

      <Bar />
    </div>
  );
};

export default BackgammonBoard;
