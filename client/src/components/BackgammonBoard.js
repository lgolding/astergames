import './backgammon.css';
import Point from './Point';
import Bar from './Bar';

const BackgammonBoard = () => {
  return (
    <div className='board'>
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />

      <Bar />

      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />

      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />

      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
    </div>
  )
}

export default BackgammonBoard
