import reducer, { initialState } from './reducer';
import * as actionTypes from './actionTypes';

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SAVE_TEXT', () => {
    expect(reducer(initialState, actionTypes.SAVE_TEXT)).toEqual(initialState);
  });
});
