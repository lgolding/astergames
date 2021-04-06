import React, { useState } from 'react';
import BackgammonBoard from './BackgammonBoard';
import DicePanel from './DicePanel';
import Game from '../games/Game';

interface Props {
}

export const GameContext = React.createContext<Game>(new Game());

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
        <div>Current player: {game.currentPlayerIndex + 1}</div>
        <BackgammonBoard onMove={handleMove} />
        <DicePanel onRoll={handleRoll} diceHaveBeenRolled={game.diceHaveBeenRolled()} />
      </GameContext.Provider>
    </>
  );
};

export default BackgammonGame;

// TODO: Keep state: don't allow drag if dice have not yet been rolled.
