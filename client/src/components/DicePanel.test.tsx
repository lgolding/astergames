import ReactDOM from 'react-dom';
import DicePanel from './DicePanel';

describe('DicePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DicePanel diceHaveBeenRolled={false} onRoll={(roll: number[]) => {}}/>, div);
  });
});
