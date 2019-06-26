import reducer, { initialState } from './reducer';
import * as actionTypes from './actionTypes';

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SAVE_TEXT', () => {
    const action = {
      type: actionTypes.SAVE_TEXT,
      text: 'Text to save'
    };
    expect(reducer(initialState, action)).toEqual({ text: 'Text to save' });
  });
});
