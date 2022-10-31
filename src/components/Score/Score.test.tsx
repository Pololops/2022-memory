import { render, screen } from '@testing-library/react';
import Score from './Score';

const setup = () => render(
    <Score />
);

describe('Score component', () => {
  it('should display the score', () => {
    setup();
    expect(screen.getByTestId('score')).toHaveTextContent(/0 point/i);
  });
});
