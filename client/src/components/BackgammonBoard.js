import _ from 'lodash';
import './backgammon.css';
import Point from './Point';
import Bar from './Bar';
import { POINT_NUMBER_CLASS_NAME } from './classNames';
import { PLAYER1, PLAYER2, POINTS_ON_BOARD } from '../games/constants';

const BackgammonBoard = ({ game }) => {
  let indices = _.range(POINTS_ON_BOARD);

  return (
    <div className='board'>
      {indices.slice(0, POINTS_ON_BOARD / 4).map(index => (
        <div key={index} className={POINT_NUMBER_CLASS_NAME}>
          {game.pointIndexToPointNumber(index)}
        </div>
      ))}
      <div></div>
      {indices.slice(POINTS_ON_BOARD / 4, POINTS_ON_BOARD / 2).map(index => (
        <div key={index} className={POINT_NUMBER_CLASS_NAME}>
          {game.pointIndexToPointNumber(index)}
        </div>
      ))}
      {indices.map(pointIndex => (
        <Point
          key={pointIndex}
          pointIndex={pointIndex}
          point={game.points[pointIndex]}
          currentPlayer={game.currentPlayer}
        />
      ))}
      {indices
        .slice(POINTS_ON_BOARD / 2, (3 * POINTS_ON_BOARD) / 4)
        .map(index => (
          <div key={index} className={POINT_NUMBER_CLASS_NAME}>
            {game.pointIndexToPointNumber(index)}
          </div>
        ))}
      <div></div>
      {indices.slice((3 * POINTS_ON_BOARD) / 4, POINTS_ON_BOARD).map(index => (
        <div key={index} className={POINT_NUMBER_CLASS_NAME}>
          {game.pointIndexToPointNumber(index)}
        </div>
      ))}
      <Bar player1={game.bar[PLAYER1]} player2={game.bar[PLAYER2]} />
    </div>
  );
};

export default BackgammonBoard;
