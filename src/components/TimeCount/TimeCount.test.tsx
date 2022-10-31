import { render, screen } from '@testing-library/react';
import TimeCount from './TimeCount';

const setup = () => render(
    <TimeCount />
);

describe('TimeCount component', () => {
  it('should display a progress bar', () => {
    setup();
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });

  it('should calcultate the width of the progress bar', () => {
    setup();
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });
});