import './backgammon.css';
import Point from './Point';
import Bar from './Bar';
import { POINTS_ON_BOARD } from '../games/constants';

const BackgammonBoard = ({ game }) => {
  let indices = Array.from(Array(POINTS_ON_BOARD).keys());

  return (
    <div className='board'>
      {indices.map(pointIndex => (
        <Point
          key={pointIndex}
          pointIndex={pointIndex}
          point={game.points[pointIndex]}
        />
      ))}

      <Bar />
    </div>
  );
};

export default BackgammonBoard;
