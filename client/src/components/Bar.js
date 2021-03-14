import './backgammon.css';

const Bar = ({ player1, player2 }) => {
  return (
    <div className='bar'>
      <span>{`${player1} / ${player2}`}</span>
    </div>
  );
};

export default Bar;
