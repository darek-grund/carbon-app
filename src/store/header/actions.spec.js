import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('actions', () => {
  it('creates action to save text', () => {
    const text = 'example action';
    const expectedAction = {
      type: actionTypes.SAVE_TEXT,
      text
    };
    expect(actions.saveText(text)).toEqual(expectedAction);
  });
});
