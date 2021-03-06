import React, { useContext } from 'react';
import _ from 'lodash';
import Checker from './Checker';
import { GameContext } from './BackgammonGame';
import { BAR_POINT_NUMBER, PLAYER1, PLAYER2 } from '../games/constants'
import CheckerColor from '../games/CheckerColor';
import Game from '../games/Game';
import './backgammon.css';

interface Props {
}

const Bar: React.FunctionComponent<Props> = () => {
  // TODO: Don't assume that player1 has the light checkers.

  const game: Game = useContext(GameContext);
  const numPlayer1Checkers = game.bar[PLAYER1];
  const numPlayer2Checkers = game.bar[PLAYER2];

  return (
    <div className='bar'>
      {_.range(numPlayer1Checkers).map(() => (
        // TODO: Checker's drag handler doesn't know how to deal with the bar
        // (or with bearing off, for that matter.)
        <Checker color={CheckerColor.LIGHT} pointIndex={BAR_POINT_NUMBER} />
      ))}
      {_.range(numPlayer2Checkers).map(() => (
        <Checker color={CheckerColor.DARK} pointIndex={BAR_POINT_NUMBER} />
      ))}{' '}
    </div>
  );
};

export default Bar;
