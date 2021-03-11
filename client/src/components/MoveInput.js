const MoveInput = ({ onMove }) => {
  const submitHandler = event => {
    event.preventDefault();
    const from = document.getElementById('fromPoint').value;
    const to = document.getElementById('toPoint').value;
    onMove(from, to);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='fromPoint'>From</label>
      <input id='fromPoint' type='number' required />
      <label htmlFor='fromPoint'>To</label>
      <input id='toPoint' type='number' required />
      <button>Move</button>
    </form>
  );
};

export default MoveInput;
