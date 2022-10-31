import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

import TimeCount from './TimeCount';

const setup = () => render(
  <Provider store={store}>
    <TimeCount />
  </Provider>
);

describe('TimeCount component', () => {
  it('should display a progress bar', () => {
    setup();
    expect(screen.getByTestId('progress-bar')).toBeInTheDocument();
  });
});