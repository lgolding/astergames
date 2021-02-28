import './backgammon.css';
import { useState } from 'react'
import Point from './Point';
import Bar from './Bar';
import Game from '../games/Game';

const BackgammonBoard = () => {
  let [ game, setGame ] = useState(new Game());

  return (
    <div className='board'>
      <Point colorClass='point-dark' numLight={game.points[0].numLight} numDark={game.points[0].numDark} />
      <Point colorClass='point-light' numLight={game.points[1].numLight} numDark={game.points[1].numDark} />
      <Point colorClass='point-dark' numLight={game.points[2].numLight} numDark={game.points[2].numDark} />
      <Point colorClass='point-light' numLight={game.points[3].numLight} numDark={game.points[3].numDark} />
      <Point colorClass='point-dark' numLight={game.points[4].numLight} numDark={game.points[4].numDark} />
      <Point colorClass='point-light' numLight={game.points[5].numLight} numDark={game.points[5].numDark} />

      <Bar />

      <Point colorClass='point-dark' numLight={game.points[6].numLight} numDark={game.points[6].numDark} />
      <Point colorClass='point-light' numLight={game.points[7].numLight} numDark={game.points[7].numDark} />
      <Point colorClass='point-dark' numLight={game.points[8].numLight} numDark={game.points[8].numDark} />
      <Point colorClass='point-light' numLight={game.points[9].numLight} numDark={game.points[9].numDark} />
      <Point colorClass='point-dark' numLight={game.points[10].numLight} numDark={game.points[10].numDark} />
      <Point colorClass='point-light' numLight={game.points[11].numLight} numDark={game.points[11].numDark} />

      <Point colorClass='point-light' numLight={game.points[12].numLight} numDark={game.points[12].numDark} />
      <Point colorClass='point-dark' numLight={game.points[13].numLight} numDark={game.points[13].numDark} />
      <Point colorClass='point-light'  numLight={game.points[14].numLight} numDark={game.points[14].numDark}/>
      <Point colorClass='point-dark' numLight={game.points[15].numLight} numDark={game.points[15].numDark} />
      <Point colorClass='point-light' numLight={game.points[16].numLight} numDark={game.points[16].numDark} />
      <Point colorClass='point-dark' numLight={game.points[17].numLight} numDark={game.points[17].numDark} />

      <Point colorClass='point-light' numLight={game.points[18].numLight} numDark={game.points[18].numDark} />
      <Point colorClass='point-dark' numLight={game.points[19].numLight} numDark={game.points[19].numDark} />
      <Point colorClass='point-light' numLight={game.points[20].numLight} numDark={game.points[20].numDark} />
      <Point colorClass='point-dark' numLight={game.points[21].numLight} numDark={game.points[21].numDark} />
      <Point colorClass='point-light' numLight={game.points[22].numLight} numDark={game.points[22].numDark} />
      <Point colorClass='point-dark' numLight={game.points[23].numLight} numDark={game.points[23].numDark} />
    </div>
  )
}

export default BackgammonBoard
