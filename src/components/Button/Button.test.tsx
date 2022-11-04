import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const handleClick = jest.fn();
const setup = () => render(
    <Button 
      text="test" 
      onClick={() => handleClick()} 
    />
);

describe('Button component', () => {
  it('should render a button', () => {
    setup();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the text "test" into the button', () => {
    setup();
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should call onClick prop when clicked', () => {
    setup();

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
