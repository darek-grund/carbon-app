import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const saveText = text => ({
  type: actionTypes.SAVE_TEXT,
  text
});
