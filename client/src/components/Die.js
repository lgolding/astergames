const Die = ({ face }) => {
  const href = `#face${face}`;
  console.log('href = ' + href);
  return (
    <div className='die'>
      <svg
        position='absolute'
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <use href={href} />
        <symbol id='face1' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='red' />
        </symbol>
        <symbol id='face2' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='orange' />
        </symbol>
        <symbol id='face3' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='yellow' />
        </symbol>
        <symbol id='face4' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='green' />
        </symbol>
        <symbol id='face5' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='blue' />
        </symbol>
        <symbol id='face6' width='100' height='100' viewBox='0 0 100 100'>
          <polygon points='0,0 50,85 100,0' fill='purple' />
        </symbol>
      </svg>
    </div>
  );
};

export default Die;
