import { FunctionComponent } from 'react';
import CheckerColor from '../games/CheckerColor';
import {
  DARK_CHECKER_CLASS_NAME,
  LIGHT_CHECKER_CLASS_NAME,
} from './classNames';
import { DRAG_DROP_DATA_FORMAT } from './constants';

// TODO: Disable drag when no move is in progress.
// TODO: Add a Jest test for this.
const handleDragStart = (
  event: any, // TODO real type
  pointIndex: number,
  pointPlayerIndex: number,
  currentPlayer: number
) => {
  console.log(
    `Player ${currentPlayer} started dragging from point ${pointIndex}, which is occupied by player ${pointPlayerIndex}.`
  );
  if (currentPlayer === pointPlayerIndex) {
    event.dataTransfer.setData(DRAG_DROP_DATA_FORMAT, pointIndex);
  } else {
    // Cannot drag from this point because it is not occupied by the current player.
    event.preventDefault();
  }
};

interface Props {
  color: number;
  pointIndex: number;
  occupyingPlayerIndex: number;
  currentPlayerIndex: number;
}

const Checker: FunctionComponent<Props> = ({ color, pointIndex, occupyingPlayerIndex, currentPlayerIndex }) => {
  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return (
    <div
      className={`checker ${checkerColorClass}`}
      draggable
      onDragStart={event =>
        handleDragStart(event, pointIndex, occupyingPlayerIndex, currentPlayerIndex)
      }
    ></div>
  );
};

export default Checker;
