import * as actionTypes from './actionTypes';
import FormService from '../../services/form-service/form-service';

export const saveForm = form => ({
  type: actionTypes.SAVE_FORM,
  form
});

export const fetchFormLoading = () => ({
  type: actionTypes.FETCH_FORM_LOADING
});

export const fetchFormSuccess = form => ({
  type: actionTypes.FETCH_FORM_SUCCESS,
  form
});

export const fetchFormError = error => ({
  type: actionTypes.FETCH_FORM_ERROR,
  error: (error && error.data && error.data.message) || 'Unknown error'
});

export const fetchForm = () => (dispatch) => {
  dispatch(fetchFormLoading());

  new FormService()
    .get(1, {
      onSuccess: form => dispatch(fetchFormSuccess(form)),
      onError: error => dispatch(fetchFormError(error))
    });
};
