import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

import App from './App';
import exp from 'constants';

const setup = () => render(
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App component', () => {
  it('should render the Score component in App', () => {
    setup();
    expect(screen.getByTestId('score')).toBeInTheDocument();
  });

  it('should render the images loaded Board component in App', () => {
    setup();
    const element = screen.getByTestId('images-loader-board');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('invisible');
  });

  it('should render the Board component in App', () => {
    setup();
    const element = screen.getByTestId('board');
    expect(element).toBeInTheDocument();
    expect(element).not.toHaveClass('invisible');
  });

  it('should render the TimeCounter component in App', () => {
    setup();
    expect(screen.getByTestId("time-counter")).toBeInTheDocument();
  });

  it('should render the Modal component in App', () => {
    setup();
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
