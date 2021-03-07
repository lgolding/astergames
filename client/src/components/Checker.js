import CheckerColor from '../games/CheckerColor';

const LIGHT_CHECKER_CLASS_NAME = 'checker-light';
const DARK_CHECKER_CLASS_NAME = 'checker-dark';

const Checker = ({ color, pointIndex, checkerIndex }) => {
  const id = `checker_${pointIndex}_${checkerIndex}`;
  const checkerColorClass =
    color === CheckerColor.LIGHT
      ? LIGHT_CHECKER_CLASS_NAME
      : DARK_CHECKER_CLASS_NAME;
  return <div id={id} className={`checker ${checkerColorClass}`}></div>;
};

export default Checker;
