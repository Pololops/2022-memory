import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

import Score from './Score';

const setup = () => render(
  <Provider store={store}>
    <Score />
  </Provider>
);

describe('Score component', () => {
  it('should display the score', () => {
    setup();
    expect(screen.getByTestId('score')).toHaveTextContent(/0 point/i);
  });
});
