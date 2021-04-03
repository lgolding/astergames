import { FunctionComponent } from 'react';

interface Props {
  face: number;
}

const Die: FunctionComponent<Props> = ({ face }) => {
  const PIP_RADIUS = 10;
  const VIEW_BOX_WIDTH = 100;
  const VIEW_BOX_HEIGHT = 100;
  const CENTER_X = VIEW_BOX_WIDTH / 2;
  const CENTER_Y = VIEW_BOX_HEIGHT / 2;
  const LEFT_X = VIEW_BOX_WIDTH / 5;
  const RIGHT_X = (4 * VIEW_BOX_WIDTH) / 5;
  const TOP_Y = VIEW_BOX_HEIGHT / 5;
  const BOTTOM_Y = (4 * VIEW_BOX_HEIGHT) / 5;

  return (
    <div className='die'>
      <svg
        width='100%'
        height='100%'
        viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
      >
        <use href={`#face${face}`} />

        <symbol
          id='face1'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={CENTER_X} cy={CENTER_Y} r={PIP_RADIUS} />
        </symbol>
        <symbol
          id='face2'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={LEFT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
        </symbol>
        <symbol
          id='face3'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={LEFT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={CENTER_X} cy={CENTER_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
        </symbol>
        <symbol
          id='face4'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={LEFT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={LEFT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
        </symbol>
        <symbol
          id='face5'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={LEFT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={CENTER_X} cy={CENTER_Y} r={PIP_RADIUS} />
          <circle cx={LEFT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
        </symbol>
        <symbol
          id='face6'
          width='100'
          height='100'
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
        >
          <circle cx={LEFT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={CENTER_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={TOP_Y} r={PIP_RADIUS} />
          <circle cx={LEFT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
          <circle cx={CENTER_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
          <circle cx={RIGHT_X} cy={BOTTOM_Y} r={PIP_RADIUS} />
        </symbol>
      </svg>
    </div>
  );
};

export default Die;
