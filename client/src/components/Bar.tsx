import { FunctionComponent } from 'react';
import _ from 'lodash';
import Checker from './Checker';
import { NO_PLAYER } from '../games/constants'
import CheckerColor from '../games/CheckerColor';
import './backgammon.css';

interface Props {
  player1: number;
  player2: number;
  currentPlayer: number;
}

const Bar: FunctionComponent<Props> = ({ player1, player2, currentPlayer }) => {
  // TODO: Don't assume that player1 has the light checkers.
  return (
    <div className='bar'>
      {_.range(player1).map(() => (
        // Problem: Checker's drag handler doesn't know how to deal with the bar
        // (or with bearing off, for that matter.)
        <Checker color={CheckerColor.LIGHT} pointIndex={-1} pointPlayerIndex={NO_PLAYER} currentPlayer={currentPlayer} />
      ))}
      {_.range(player2).map(() => (
        <Checker color={CheckerColor.DARK} pointIndex={-1} pointPlayerIndex={NO_PLAYER} currentPlayer={currentPlayer} />
      ))}{' '}
    </div>
  );
};

export default Bar;
