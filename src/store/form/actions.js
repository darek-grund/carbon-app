import * as actionTypes from './actionTypes';
import FormService from '../../services/form-service/form-service';
import axios from 'axios';

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

export const fetchForm = () => async (dispatch) => {
  await dispatch(fetchFormLoading());

  return axios.get('http://127.0.0.1:8081/api/forms/1')
    .then(response => dispatch(fetchFormSuccess(response.data)))
    .catch(error => dispatch(fetchFormError(error && error.response)));
};
