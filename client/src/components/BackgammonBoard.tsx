import React from 'react';
import _ from 'lodash';
import './backgammon.css';
import Point from './Point';
import PointNumber from './PointNumber';
import Bar from './Bar';
import { POINTS_ON_BOARD } from '../games/constants';

interface Props {
}

const BackgammonBoard: React.FunctionComponent<Props> = () => {
  let pointIndices = _.range(POINTS_ON_BOARD);

  return (
    <div className='board'>
      {pointIndices.slice(0, POINTS_ON_BOARD / 4).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} />
        ))}
      <div></div>
      {pointIndices.slice(POINTS_ON_BOARD / 4, POINTS_ON_BOARD / 2).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} />
      ))}
      {pointIndices.map(pointIndex => (
        <Point
          key={pointIndex}
          pointIndex={pointIndex}
        />
      ))}
      {pointIndices
        .slice(POINTS_ON_BOARD / 2, (3 * POINTS_ON_BOARD) / 4)
        .map(pointIndex => (
          <PointNumber key={pointIndex} pointIndex={pointIndex} />
          ))}
      <div></div>
      {pointIndices.slice((3 * POINTS_ON_BOARD) / 4, POINTS_ON_BOARD).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} />
        ))}
      <Bar />
    </div>
  );
};

export default BackgammonBoard;
