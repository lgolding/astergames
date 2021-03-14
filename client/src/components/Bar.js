import _ from 'lodash';
import Checker from './Checker';
import CheckerColor from '../games/CheckerColor';
import './backgammon.css';

const Bar = ({ player1, player2 }) => {
  // TODO: Don't assume that player1 has the light checkers.
  return (
    <div className='bar'>
      {_.range(player1).map(() => (
        <Checker color={CheckerColor.LIGHT} />
      ))}
      {_.range(player2).map(() => (
        <Checker color={CheckerColor.DARK} />
      ))}{' '}
    </div>
  );
};

export default Bar;
