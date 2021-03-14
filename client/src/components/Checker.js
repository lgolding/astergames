import CheckerColor from '../games/CheckerColor';
import {
  DARK_CHECKER_CLASS_NAME,
  LIGHT_CHECKER_CLASS_NAME,
} from './classNames';

const Checker = ({ color }) => {
  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return <div className={`checker ${checkerColorClass}`}></div>;
};

export default Checker;
