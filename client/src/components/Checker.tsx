import React, { useContext } from 'react';
import { GameContext } from './BackgammonGame';
import CheckerColor from '../games/CheckerColor';
import Game from '../games/Game';
import {
  DARK_CHECKER_CLASS_NAME,
  LIGHT_CHECKER_CLASS_NAME,
} from './classNames';
import { DRAG_DROP_DATA_FORMAT } from './constants';
import { BAR_POINT_NUMBER } from '../games/constants';

// TODO: Add a Jest test for this.
const handleDragStart = (
  event: React.DragEvent,
  pointIndex: number,
  game: Game
) => {
  if (!game.diceHaveBeenRolled()) {
    event.preventDefault();
    return;
  }

  if (pointIndex === BAR_POINT_NUMBER && game.bar[game.currentPlayerIndex] === 0) {
    event.preventDefault();
    return;
  }

  if (pointIndex !== BAR_POINT_NUMBER && game.currentPlayerIndex !== game.points[pointIndex].occupyingPlayerIndex) {
    event.preventDefault();
    return;
  }

  event.dataTransfer.setData(DRAG_DROP_DATA_FORMAT, pointIndex.toString());
};

interface Props {
  color: number;
  pointIndex: number;
}

const Checker: React.FunctionComponent<Props> = ({ color, pointIndex }) => {
  const game: Game = useContext(GameContext);

  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return (
    <div
      className={`checker ${checkerColorClass}`}
      draggable
      onDragStart={event =>
        handleDragStart(event, pointIndex, game)
      }
    ></div>
  );
};

export default Checker;