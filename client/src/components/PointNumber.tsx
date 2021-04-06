import React, { useContext } from 'react'
import { GameContext } from './BackgammonGame';
import { POINT_NUMBER_CLASS_NAME } from './classNames';
import { PLAYER1 } from '../games/constants';
import Game from '../games/Game';

interface Props {
  pointIndex: number;
}

// Convert from a "point index" (the index of a point in the board's array of points,
// which corresponds to grid layout order) to a "point number" (the conventional number
// of the point from the point of view of the current player).
const pointIndexToPointNumber = (pointIndex: number, currentPlayerIndex: number): number => {
  if (currentPlayerIndex === PLAYER1) {
    return pointIndex < 12 ? 13 + pointIndex : 24 - pointIndex;
  } else {
    return pointIndex < 12 ? 12 - pointIndex : 1 + pointIndex;
  }
};

const PointNumber: React.FunctionComponent<Props> = ({pointIndex})  => {
  const game: Game = useContext(GameContext);

  return (
    <div className={POINT_NUMBER_CLASS_NAME}>
        {pointIndexToPointNumber(pointIndex, game.currentPlayerIndex)}
    </div>
)
  };

export default PointNumber