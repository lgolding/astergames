import { FunctionComponent } from 'react'
import { POINT_NUMBER_CLASS_NAME } from './classNames';
import { PLAYER1 } from '../games/constants';

interface Props {
  pointIndex: number;
  currentPlayerIndex: number;
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

const PointNumber: FunctionComponent<Props> = ({pointIndex, currentPlayerIndex})  => (
    <div className={POINT_NUMBER_CLASS_NAME}>
        {pointIndexToPointNumber(pointIndex, currentPlayerIndex)}
    </div>
);

export default PointNumber