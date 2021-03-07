import Checker from './Checker';
import CheckerColor from '../games/CheckerColor';
import { POINTS_ON_ROW } from '../games/constants';

const POINT_CLASS_NAME = 'point';
const POINT_TOP_ROW_CLASS_NAME = 'point-top-row';
const POINT_BOTTOM_ROW_CLASS_NAME = 'point-bottom-row';
const LIGHT_POINT_CLASS_NAME = 'point-light';
const DARK_POINT_CLASS_NAME = 'point-dark';

const Point = ({ pointIndex, point }) => {
  let pointColorClassName;
  if (pointIndex < POINTS_ON_ROW) {
    pointColorClassName =
      pointIndex % 2 === 0 ? DARK_POINT_CLASS_NAME : LIGHT_POINT_CLASS_NAME;
  } else {
    pointColorClassName =
      pointIndex % 2 === 0 ? LIGHT_POINT_CLASS_NAME : DARK_POINT_CLASS_NAME;
  }

  const pointRowClassName =
    pointIndex < POINTS_ON_ROW
      ? POINT_TOP_ROW_CLASS_NAME
      : POINT_BOTTOM_ROW_CLASS_NAME;

  const checkerColor =
    point.numLight > 0 ? CheckerColor.LIGHT : CheckerColor.DARK;
  const numCheckers = point.numLight || point.numDark;

  const checkerIndices = Array.from(new Array(numCheckers).keys());

  const id = `point_${pointIndex}`;

  return (
    <div
      id={id}
      className={`${POINT_CLASS_NAME} ${pointRowClassName} ${pointColorClassName}`}
    >
      {checkerIndices.map(checkerIndex => (
        <Checker
          color={checkerColor}
          pointIndex={pointIndex}
          checkerIndex={checkerIndex}
        />
      ))}
    </div>
  );
};

export default Point;
