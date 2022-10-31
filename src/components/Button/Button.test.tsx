import { render, screen } from '@testing-library/react';
import Button from './Button';

const setup = () => render(
    <Button 
      text="test" 
      onClick={(): string => 'clicked'} 
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
});
