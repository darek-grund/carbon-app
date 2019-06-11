import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const updateForm = form => ({
  type: actionTypes.UPDATE_FORM,
  form
});
