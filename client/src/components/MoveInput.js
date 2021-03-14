import { React, useRef } from 'react';
import {
  MOVE_INPUT_FORM_CLASS_NAME,
  MOVE_INPUT_FORM_LABEL_CLASS_NAME,
  MOVE_INPUT_FORM_BUTTON_CLASS_NAME,
} from './classNames';

const MoveInput = ({ onMove }) => {
  const fromField = useRef();
  const toField = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const fromPointNumber = parseInt(fromField.current.value);
    const toPointNumber = parseInt(toField.current.value);
    onMove(fromPointNumber, toPointNumber);
    fromField.current.focus();
    fromField.current.select();
  };

  return (
    <form className={MOVE_INPUT_FORM_CLASS_NAME} onSubmit={submitHandler}>
      <label className={MOVE_INPUT_FORM_LABEL_CLASS_NAME} htmlFor='fromField'>
        From
      </label>
      <input ref={fromField} id='fromField' type='number' required />
      <label className={MOVE_INPUT_FORM_LABEL_CLASS_NAME} htmlFor='toField'>
        To
      </label>
      <input ref={toField} id='toField' type='number' required />
      <button className={MOVE_INPUT_FORM_BUTTON_CLASS_NAME}>Move</button>
    </form>
  );
};

export default MoveInput;
