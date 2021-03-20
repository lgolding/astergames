import _ from 'lodash';
import { useState } from 'react';
import Die from './Die';
import { NUM_DICE, NUM_DIE_FACES } from '../games/constants';

const getRandomFace = () => 1 + Math.floor(Math.random() * NUM_DIE_FACES);

const DicePanel = () => {
  const [faces, setFaces] = useState([getRandomFace(), getRandomFace()]);
  const dice = _.range(NUM_DICE).map(n => <Die key={n} face={faces[n]} />);

  const rollDice = () => {
    setFaces([getRandomFace(), getRandomFace()]);
  };

  return (
    <div className='dice-panel'>
      {dice}
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};

export default DicePanel;
