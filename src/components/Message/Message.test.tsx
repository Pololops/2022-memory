import { render, screen } from '@testing-library/react';
import Message from './Message';

const setup = () => render(<Message text="test" />);

describe('Message component', () => {
  it('should render the text "test" into the button', () => {
    setup();
    expect(screen.getByTestId('message')).toHaveTextContent('test');
  });
});