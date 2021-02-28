import './backgammon.css';
import { useState } from 'react'
import Point from './Point';
import Bar from './Bar';
import Game from '../games/Game';

const BackgammonBoard = () => {
  let [ game, setGame ] = useState(new Game());
  let indices = Array.from(Array(24).keys());

  return (
    <div className='board'>
      {indices.slice(0, 6).map(index => (
        <Point index={index} point={game.points[index]} />
      ))}

      <Bar />

      {indices.slice(6, 24).map(index => (
        <Point index={index} point={game.points[index]} />
      ))}
    </div>
  )
}

export default BackgammonBoard
