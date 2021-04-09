import React, { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

interface Props {
}

export interface HandleMoveFn {
  (fromPointNumber: number, toPointNumber: number): void
}

export const GameContext = React.createContext<Game>(new Game());
export const HandleMoveContext = React.createContext<HandleMoveFn>(() => {});

const BackgammonGame: React.FunctionComponent<Props> = () => {
  const [game, setGame] = useState(new Game());

  const handleMove = (fromPointNumber: number, toPointNumber: number) => {
    try {
      const newGame = game.move(fromPointNumber, toPointNumber);
      setGame(newGame);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleRoll = (roll: number[]) => {
    const newGame = game.startTurn(roll);
    setGame(newGame);
  };

  return (
    <>
      <GameContext.Provider value={game}>
        <HandleMoveContext.Provider value={handleMove}>
          <div>Current player: {game.currentPlayerIndex + 1}</div>
          <BackgammonBoard />
          <DicePanel onRoll={handleRoll} diceHaveBeenRolled={game.diceHaveBeenRolled()} />
        </HandleMoveContext.Provider>
      </GameContext.Provider>
    </>
  );
};

export default BackgammonGame;