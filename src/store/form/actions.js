import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const saveForm = form => ({
  type: actionTypes.SAVE_FORM,
  form
});
