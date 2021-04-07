import { render, screen } from '@testing-library/react';
import { DIE_ROLE, DIE_CLASS, DIE_ACTIVE_CLASS, DIE_INACTIVE_CLASS } from './Die';
import DicePanel from './DicePanel';
import { NUM_DICE } from '../games/constants';

const doNothing = () => {};

describe('DicePanel', () => {
  it('enables the Roll button and grays the dice if the dice have not been rolled', () => {
    render(<DicePanel diceHaveBeenRolled={false} onRoll={doNothing}/>);

    const rollButton: HTMLButtonElement = screen.getByText('Roll') as HTMLButtonElement;
    expect(rollButton).toBeEnabled();

    const dice: HTMLElement[] = screen.getAllByRole(DIE_ROLE);
    expect(dice.length).toBe(NUM_DICE);

    dice.forEach((die: HTMLElement) => {
      expect(die).toHaveClass(DIE_CLASS);
      expect(die).toHaveClass(DIE_INACTIVE_CLASS);
    });
  });

  it('disables the Roll button and un-grays the dice once the dice have been rolled', () => {
    render(<DicePanel diceHaveBeenRolled={true} onRoll={doNothing}/>);

    const rollButton: HTMLButtonElement = screen.getByText('Roll') as HTMLButtonElement;
    expect(rollButton).toBeDisabled();

    const dice: HTMLElement[] = screen.getAllByRole(DIE_ROLE);
    expect(dice.length).toBe(NUM_DICE);

    dice.forEach((die: HTMLElement) => {
      expect(die).toHaveClass(DIE_CLASS);
      expect(die).toHaveClass(DIE_ACTIVE_CLASS);
    });
  });
});
