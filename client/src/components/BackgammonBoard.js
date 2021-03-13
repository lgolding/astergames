import './backgammon.css';
import Point from './Point';
import Bar from './Bar';
import { POINTS_ON_BOARD } from '../games/constants';

const BackgammonBoard = ({ game }) => {
  let indices = Array.from(Array(POINTS_ON_BOARD).keys());

  return (
    <div className='board'>
      {indices.slice(0, POINTS_ON_BOARD / 4).map(index => (
        <div>{game.pointIndexToPointNumber(index)}</div>
      ))}
      <div style={{ backgroundColor: 'green' }}></div>
      {indices.slice(POINTS_ON_BOARD / 4, POINTS_ON_BOARD / 2).map(index => (
        <div>{game.pointIndexToPointNumber(index)}</div>
      ))}
      {indices.map(pointIndex => (
        <Point
          key={pointIndex}
          pointIndex={pointIndex}
          point={game.points[pointIndex]}
        />
      ))}
      {indices
        .slice(POINTS_ON_BOARD / 2, (3 * POINTS_ON_BOARD) / 4)
        .map(index => (
          <div>{game.pointIndexToPointNumber(index)}</div>
        ))}
      <div style={{ backgroundColor: 'green' }}></div>
      {indices.slice((3 * POINTS_ON_BOARD) / 4, POINTS_ON_BOARD).map(index => (
        <div>{game.pointIndexToPointNumber(index)}</div>
      ))}
      <Bar />
    </div>
  );
};

export default BackgammonBoard;
