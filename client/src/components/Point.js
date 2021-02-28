import React from 'react'

const LIGHT_POINT_CLASS_NAME = 'point-light'
const DARK_POINT_CLASS_NAME = 'point-dark';

const Point = ({index, point}) => {
  let className;
  if (index < 12) {
    className = index % 2 === 0 ? DARK_POINT_CLASS_NAME : LIGHT_POINT_CLASS_NAME;
  } else {
    className = index % 2 === 0 ? LIGHT_POINT_CLASS_NAME : DARK_POINT_CLASS_NAME;
  }

  return (
    <div className={className}>
      {`${point.numLight}L`}
      <br/>
      {`${point.numDark}D`}
    </div>
  )
}

export default Point
