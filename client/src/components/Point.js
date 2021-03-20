import _ from 'lodash';
import Checker from './Checker';
import CheckerColor from '../games/CheckerColor';
import { DRAG_DROP_DATA_FORMAT } from './constants';
import { PLAYER1, POINTS_ON_ROW } from '../games/constants';

const LIGHT_POINT_CLASS_NAME = 'point-light';
const DARK_POINT_CLASS_NAME = 'point-dark';

const TOP_POINT_ROW = 2; // Because row 1 is used to display the point numbers.
const BOTTOM_POINT_ROW = 3;

const Point = ({ pointIndex, game, onMove }) => {
  const point = game.points[pointIndex];
  const currentPlayer = game.currentPlayer;

  let pointColorClass;
  if (pointIndex < POINTS_ON_ROW) {
    pointColorClass =
      pointIndex % 2 === 0 ? DARK_POINT_CLASS_NAME : LIGHT_POINT_CLASS_NAME;
  } else {
    pointColorClass =
      pointIndex % 2 === 0 ? LIGHT_POINT_CLASS_NAME : DARK_POINT_CLASS_NAME;
  }

  let pointRow;
  let pointRowClass;
  if (pointIndex < POINTS_ON_ROW) {
    pointRow = TOP_POINT_ROW;
    pointRowClass = 'point-top-row';
  } else {
    pointRow = BOTTOM_POINT_ROW;
    pointRowClass = 'point-bottom-row';
  }

  const checkerColor =
    point.playerIndex === PLAYER1 ? CheckerColor.LIGHT : CheckerColor.DARK;
  const numCheckers = point.numCheckers;

  const checkerIndices = _.range(numCheckers);

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();
    const startPointIndex = parseInt(
      event.dataTransfer.getData(DRAG_DROP_DATA_FORMAT)
    );
    const fromPointNumber = game.pointIndexToPointNumber(startPointIndex);
    const toPointNumber = game.pointIndexToPointNumber(pointIndex);

    console.log(
      `Player ${currentPlayer} dragged from point ${fromPointNumber} (index ${startPointIndex}) to point ${toPointNumber} (index ${pointIndex}).`
    );

    onMove(fromPointNumber, toPointNumber);
  };

  return (
    <div
      className='point'
      style={{ gridRow: pointRow }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={`point-background ${pointColorClass}`}>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          {pointRow === TOP_POINT_ROW ? (
            <polygon points='0,0 50,85 100,0' />
          ) : (
            <polygon points='0,100 50,15 100,100' />
          )}
        </svg>
      </div>
      <div className={`checker-container ${pointRowClass}`}>
        {checkerIndices.map(checkerIndex => (
          <Checker
            key={100 * pointIndex + checkerIndex}
            color={checkerColor}
            pointIndex={pointIndex}
            pointPlayerIndex={point.playerIndex}
            currentPlayer={currentPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default Point;
