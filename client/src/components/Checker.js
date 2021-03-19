import CheckerColor from '../games/CheckerColor';
import {
  DARK_CHECKER_CLASS_NAME,
  LIGHT_CHECKER_CLASS_NAME,
} from './classNames';
import { START_POINT_INDEX_DATA_TRANSFER_PROPERTY } from './constants.js';

const handleDragStart = (event, pointIndex) => {
  event.dataTransfer.setData(
    START_POINT_INDEX_DATA_TRANSFER_PROPERTY,
    pointIndex
  );
};

const Checker = ({ color, pointIndex }) => {
  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return (
    <div
      className={`checker ${checkerColorClass}`}
      draggable
      onDragStart={event => handleDragStart(event, pointIndex)}
    ></div>
  );
};

export default Checker;
