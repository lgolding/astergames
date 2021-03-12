import { React, useRef } from 'react';

const MoveInput = ({ onMove }) => {
  const fromField = useRef();
  const toField = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const from = fromField.current.value;
    const to = toField.current.value;
    onMove(from, to);
    fromField.current.focus();
    fromField.current.select();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='fromField'>From</label>
      <input ref={fromField} id='fromField' type='number' required />
      <label htmlFor='toField'>To</label>
      <input ref={toField} id='toField' type='number' required />
      <button>Move</button>
    </form>
  );
};

export default MoveInput;
