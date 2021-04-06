import React from 'react';
import _ from 'lodash';
import Checker from './Checker';
import { NO_PLAYER, BAR_POINT_NUMBER } from '../games/constants'
import CheckerColor from '../games/CheckerColor';
import Game from '../games/Game';
import './backgammon.css';

interface Props {
  player1: number;
  player2: number;
  game: Game;
}

const Bar: React.FunctionComponent<Props> = ({ player1, player2, game }) => {
  // TODO: Don't assume that player1 has the light checkers.
  // TODO: Be able to drag from the bar.
  return (
    <div className='bar'>
      {_.range(player1).map(() => (
        // Problem: Checker's drag handler doesn't know how to deal with the bar
        // (or with bearing off, for that matter.)
        <Checker color={CheckerColor.LIGHT} pointIndex={BAR_POINT_NUMBER} occupyingPlayerIndex={NO_PLAYER} game={game} />
      ))}
      {_.range(player2).map(() => (
        <Checker color={CheckerColor.DARK} pointIndex={BAR_POINT_NUMBER} occupyingPlayerIndex={NO_PLAYER} game={game} />
      ))}{' '}
    </div>
  );
};

export default Bar;
