const MoveInput = ({ onMove }) => {
  const clickHandler = () => {
    const from = document.getElementById('fromPoint').value;
    const to = document.getElementById('toPoint').value;
    onMove(from, to);
  };
  return (
    <div>
      <label htmlFor='fromPoint'>From</label>
      <input id='fromPoint' type='number' required />
      <label htmlFor='fromPoint'>To</label>
      <input id='toPoint' type='number' required />
      <button onClick={clickHandler}>Move</button>
    </div>
  );
};

export default MoveInput;
