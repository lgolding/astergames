import CheckerColor from '../games/CheckerColor';
import {
  DARK_CHECKER_CLASS_NAME,
  LIGHT_CHECKER_CLASS_NAME,
} from './classNames';
import { DRAG_DROP_DATA_FORMAT } from './constants.js';

const handleDragStart = (
  event,
  pointIndex,
  pointPlayerIndex,
  currentPlayer
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

const Checker = ({ color, pointIndex, pointPlayerIndex, currentPlayer }) => {
  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return (
    <div
      className={`checker ${checkerColorClass}`}
      draggable
      onDragStart={event =>
        handleDragStart(event, pointIndex, pointPlayerIndex, currentPlayer)
      }
    ></div>
  );
};

export default Checker;
