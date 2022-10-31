import reducer from '.';
import initialState from '../state';

describe('reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(initialState, { type: 'UNKNOWN' })).toEqual({
      ...initialState
    });
  });

  it('should change the state to start game', () => {
    const actual = reducer(initialState, { type: 'START_GAME', payload: null });
    expect(actual.gameIsOn).toEqual(true);
    expect(actual.isModalVisible).toEqual(false);
  });

  it('should change the state to stop game', () => {
    const actual = reducer(initialState, { type: 'STOP_GAME', payload: null });
    expect(actual.gameIsOn).toEqual(false);
    expect(actual.isModalVisible).toEqual(true);
  });
});
