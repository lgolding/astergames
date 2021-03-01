import Checker from './Checker';

const LIGHT_POINT_CLASS_NAME = 'point-light';
const DARK_POINT_CLASS_NAME = 'point-dark';

const LIGHT_CHECKER_CLASS_NAME = 'checker-light';
const DARK_CHECKER_CLASS_NAME = 'checker-dark';

const Point = ({ index, point }) => {
  let pointClassName;
  if (index < 12) {
    pointClassName =
      index % 2 === 0 ? DARK_POINT_CLASS_NAME : LIGHT_POINT_CLASS_NAME;
  } else {
    pointClassName =
      index % 2 === 0 ? LIGHT_POINT_CLASS_NAME : DARK_POINT_CLASS_NAME;
  }

  let checkerClassName;
  let numCheckers;
  if (point.numLight > 0) {
    checkerClassName = LIGHT_CHECKER_CLASS_NAME;
    numCheckers = point.numLight;
  } else {
    checkerClassName = DARK_CHECKER_CLASS_NAME;
    numCheckers = point.numDark;
  }

  let checkerIndices = Array.from(new Array(numCheckers).keys());

  return (
    <div className={pointClassName}>
      {checkerIndices.map(_index => (
        <Checker className={'checker ' + checkerClassName} />
      ))}
    </div>
  );
};

export default Point;
