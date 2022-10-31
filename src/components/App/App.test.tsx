import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

import App from './App';

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

  it('should render the Board component in App', () => {
    setup();
    expect(screen.getByTestId('board')).toBeInTheDocument();
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
