import React from 'react';

export const DIE_ROLE = 'die';
export const DIE_CLASS = 'die';
export const DIE_ACTIVE_CLASS = 'die--active';
export const DIE_INACTIVE_CLASS = 'die--inactive';

interface Props {
  face: number;
  active: boolean;
}

const Die: React.FunctionComponent<Props> = ({ face, active }) => {
  const PIP_RADIUS = 10;
  const VIEW_BOX_WIDTH = 100;
  const VIEW_BOX_HEIGHT = 100;
  const CENTER_X = VIEW_BOX_WIDTH / 2;
  const CENTER_Y = VIEW_BOX_HEIGHT / 2;
  const LEFT_X = VIEW_BOX_WIDTH / 5;
  const RIGHT_X = (4 * VIEW_BOX_WIDTH) / 5;
  const TOP_Y = VIEW_BOX_HEIGHT / 5;
  const BOTTOM_Y = (4 * VIEW_BOX_HEIGHT) / 5;

  const dieClass: string = `${DIE_CLASS} ${active ? DIE_ACTIVE_CLASS : DIE_INACTIVE_CLASS}`;

  return (
    <div role={DIE_ROLE} className={dieClass}>
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
