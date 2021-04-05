import { FunctionComponent } from 'react';
import _ from 'lodash';
import { useState } from 'react';
import Die from './Die';
import { NUM_DICE, NUM_DIE_FACES } from '../games/constants';

// TODO: Disable the Roll button if there are any moves left to make from the current roll.
// Write our first Jest tests of a component to verify this.
const getRandomFace = () => 1 + Math.floor(Math.random() * NUM_DIE_FACES);
const makeRoll = () => [getRandomFace(), getRandomFace()];

interface Props {
  onRoll(roll: number[]): void;
}

const DicePanel: FunctionComponent<Props> = ({ onRoll }) => {
  const [roll, setRoll] = useState(makeRoll());

  const dice = _.range(NUM_DICE).map(n => <Die key={n} face={roll[n]} />);

  const rollDice = () => {
    const newRoll = makeRoll();
    onRoll(newRoll);
    setRoll(newRoll);
  };

  return (
    <div className='dice-panel'>
      {dice}
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};

export default DicePanel;
