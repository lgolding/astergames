import './backgammon.css';
import Point from './Point';

const BackgammonBoard = () => {
  return (
    <div className='board'>
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />
      <Point colorClass='point-dark' />
      <Point colorClass='point-light' />

      <div className='bar' />

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
