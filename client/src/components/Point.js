import React from 'react'

const Point = ({index, point}) => {
  let className;
  if (index < 12) {
    className = index % 2 === 0 ? 'point-dark' : 'point-light';
  } else {
    className = index % 2 === 0 ? 'point-light' : 'point-dark';
  }

  return (
    <div className={className}>
      {`${point.numLight}L`}
      <br/>
      {`${point.numDark}L`}
    </div>
  )
}

export default Point
