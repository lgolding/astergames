import './backgammon.css';
import { useState } from 'react'
import Point from './Point';
import Bar from './Bar';
import Game from '../games/Game';

const BackgammonBoard = () => {
  let [ game, setGame ] = useState(new Game());

  return (
    <div className='board'>
      <Point index={0} point={game.points[0]} />
      <Point index={1} point={game.points[1]} />
      <Point index={2} point={game.points[2]} />
      <Point index={3} point={game.points[3]} />
      <Point index={4} point={game.points[4]} />
      <Point index={5} point={game.points[5]} />

      <Bar />

      <Point index={6} point={game.points[6]} />
      <Point index={7} point={game.points[7]} />
      <Point index={8} point={game.points[8]} />
      <Point index={9} point={game.points[9]} />
      <Point index={10} point={game.points[10]} />
      <Point index={11} point={game.points[11]} />

      <Point index={12} point={game.points[12]} />
      <Point index={13} point={game.points[13]} />
      <Point index={14} point={game.points[14]} />
      <Point index={15} point={game.points[15]} />
      <Point index={16} point={game.points[16]} />
      <Point index={17} point={game.points[17]} />

      <Point index={18} point={game.points[18]} />
      <Point index={19} point={game.points[19]} />
      <Point index={20} point={game.points[20]} />
      <Point index={21} point={game.points[21]} />
      <Point index={22} point={game.points[22]} />
      <Point index={23} point={game.points[23]} />
    </div>
  )
}

export default BackgammonBoard
