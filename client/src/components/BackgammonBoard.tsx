import { FunctionComponent } from 'react';
import _ from 'lodash';
import './backgammon.css';
import Point from './Point';
import PointNumber from './PointNumber';
import Bar from './Bar';
import { PLAYER1, PLAYER2, POINTS_ON_BOARD } from '../games/constants';
import Game from '../games/Game';

interface Props {
  game: Game;
  onMove(fromPointNumber: number, toPointNumber: number): void;
}

const BackgammonBoard: FunctionComponent<Props> = ({ game, onMove }) => {
  let indices = _.range(POINTS_ON_BOARD);

  return (
    <div className='board'>
      {indices.slice(0, POINTS_ON_BOARD / 4).map(index => (
        <PointNumber key={index} pointIndex={index} currentPlayerIndex={game.currentPlayer} />
        ))}
      <div></div>
      {indices.slice(POINTS_ON_BOARD / 4, POINTS_ON_BOARD / 2).map(index => (
        <PointNumber key={index} pointIndex={index} currentPlayerIndex={game.currentPlayer} />
      ))}
      {indices.map(pointIndex => (
        <Point
          key={pointIndex}
          game={game}
          pointIndex={pointIndex}
          onMove={onMove}
        />
      ))}
      {indices
        .slice(POINTS_ON_BOARD / 2, (3 * POINTS_ON_BOARD) / 4)
        .map(index => (
          <PointNumber key={index} pointIndex={index} currentPlayerIndex={game.currentPlayer} />
          ))}
      <div></div>
      {indices.slice((3 * POINTS_ON_BOARD) / 4, POINTS_ON_BOARD).map(index => (
        <PointNumber key={index} pointIndex={index} currentPlayerIndex={game.currentPlayer} />
        ))}
      <Bar player1={game.bar[PLAYER1]} player2={game.bar[PLAYER2]} currentPlayer={game.currentPlayer} />
    </div>
  );
};

export default BackgammonBoard;
