import './backgammon.css';

const Point = ({ colorClass }) => {
  return (
    <div className={"point " + colorClass}>
    </div>
  )
}

export default Point
