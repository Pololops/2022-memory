import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

const handleClick = jest.fn();
const setup = () => render(
  <Button onClick={() => handleClick()}>Test</Button>
);

describe('Button component', () => {
  it('should render a button', () => {
    setup();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick prop when clicked', () => {
    setup();

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
