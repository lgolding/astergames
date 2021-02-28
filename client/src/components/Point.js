import './backgammon.css';

const Point = ({ colorClass, numLight, numDark }) => {
  return (
    <div className={"point " + colorClass}>
      {`${numLight}L`}
      <br/>
      {`${numDark}D`}
    </div>
  )
}

export default Point
