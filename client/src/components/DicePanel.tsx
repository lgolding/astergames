import { FunctionComponent } from 'react';
import _ from 'lodash';
import { useState } from 'react';
import Die from './Die';
import { NUM_DICE, NUM_DIE_FACES } from '../games/constants';

// Disable the Roll button if there are any moves left to make from the current roll.
// TODO: Write our first Jest tests of a component to verify this.
const getRandomFace = () => 1 + Math.floor(Math.random() * NUM_DIE_FACES);
const makeRoll = () => [getRandomFace(), getRandomFace()];

interface Props {
  moveInProgress: boolean;
  onRoll(roll: number[]): void;
}

const DicePanel: FunctionComponent<Props> = ({ moveInProgress, onRoll }) => {
  const [roll, setRoll] = useState(makeRoll());

  const dice = _.range(NUM_DICE).map(n => <Die key={n} face={roll[n]} active={moveInProgress} />);

  const rollDice = () => {
    const newRoll = makeRoll();
    onRoll(newRoll);
    setRoll(newRoll);
  };

  return (
    <div className='dice-panel'>
      {dice}
      <button disabled={moveInProgress} onClick={rollDice}>Roll</button>
    </div>
  );
};

export default DicePanel;
