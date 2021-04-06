import React, { useContext } from 'react';
import _ from 'lodash';
import './backgammon.css';
import { GameContext } from './BackgammonGame';
import Point from './Point';
import PointNumber from './PointNumber';
import Bar from './Bar';
import { PLAYER1, PLAYER2, POINTS_ON_BOARD } from '../games/constants';
import Game from '../games/Game';

interface Props {
  onMove(fromPointNumber: number, toPointNumber: number): void;
}

const BackgammonBoard: React.FunctionComponent<Props> = ({ onMove }) => {
  let pointIndices = _.range(POINTS_ON_BOARD);
  const game: Game = useContext(GameContext);

  return (
    <div className='board'>
      {pointIndices.slice(0, POINTS_ON_BOARD / 4).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} currentPlayerIndex={game.currentPlayerIndex} />
        ))}
      <div></div>
      {pointIndices.slice(POINTS_ON_BOARD / 4, POINTS_ON_BOARD / 2).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} currentPlayerIndex={game.currentPlayerIndex} />
      ))}
      {pointIndices.map(pointIndex => (
        <Point
          key={pointIndex}
          game={game}
          pointIndex={pointIndex}
          onMove={onMove}
        />
      ))}
      {pointIndices
        .slice(POINTS_ON_BOARD / 2, (3 * POINTS_ON_BOARD) / 4)
        .map(pointIndex => (
          <PointNumber key={pointIndex} pointIndex={pointIndex} currentPlayerIndex={game.currentPlayerIndex} />
          ))}
      <div></div>
      {pointIndices.slice((3 * POINTS_ON_BOARD) / 4, POINTS_ON_BOARD).map(pointIndex => (
        <PointNumber key={pointIndex} pointIndex={pointIndex} currentPlayerIndex={game.currentPlayerIndex} />
        ))}
      <Bar player1={game.bar[PLAYER1]} player2={game.bar[PLAYER2]} game={game} />
    </div>
  );
};

export default BackgammonBoard;
