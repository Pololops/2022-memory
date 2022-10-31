import reducer from '.';
import initialState from '../state';
import type { RootState } from '../state';

describe('reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(initialState, { type: 'unknow' })).toEqual({
      ...initialState
    });
  });
});
