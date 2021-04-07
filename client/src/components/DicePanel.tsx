import React from 'react';
import _ from 'lodash';
import { useState } from 'react';
import Die from './Die';
import { NUM_DICE, NUM_DIE_FACES } from '../games/constants';

// Disable the Roll button if dice have been rolled.
const getRandomFace = () => 1 + Math.floor(Math.random() * NUM_DIE_FACES);
const makeRoll = () => [getRandomFace(), getRandomFace()];

interface Props {
  diceHaveBeenRolled: boolean;
  onRoll(roll: number[]): void;
}

const DicePanel: React.FunctionComponent<Props> = ({ diceHaveBeenRolled, onRoll }) => {
  const [roll, setRoll] = useState(makeRoll());

  const dice = _.range(NUM_DICE).map(n => <Die key={n} face={roll[n]} active={diceHaveBeenRolled} />);

  const rollDice = () => {
    const newRoll = makeRoll();
    onRoll(newRoll);
    setRoll(newRoll);
  };

  return (
    <div className='dice-panel'>
      {dice}
      <button disabled={diceHaveBeenRolled} onClick={rollDice}>Roll</button>
    </div>
  );
};

export default DicePanel;
