export const POINTS_ON_BOARD = 24;
export const POINTS_ON_ROW = POINTS_ON_BOARD / 2;

// A "point number" that refers to the bar. "Real" points have numbers from 1 to 24.
// The bar is given a point number greater than any real point so that a move from
// the bar to any point is considered to be in the correct direction, that is, from
// a higher point number to a lower point number.
export const BAR_POINT_NUMBER = 25;

// A "point number" that refers to the location to which checkers are borne off.
// This location is give a point number smaller than any real point so that a move
// that bears off a checker from any point is considered to be in the correct
// direction, that is, from a higher point number to a lower point number.
export const OFF_POINT_NUMBER = 0; // TODO: This is not yet used because bearing off logic is NYI.

export const NO_PLAYER = -1;
export const PLAYER1 = 0;
export const PLAYER2 = 1;

export const NUM_DICE = 2;
export const NUM_DIE_FACES = 6;
