import * as actionTypes from './actionTypes';

export const initialState = {
  name: '',
  date: '',
  text: '',
  item: null,
  loading: false,
  error: ''
};

const saveForm = (state, { form }) => ({
  ...state,
  name: form.name,
  date: form.date,
  text: form.text,
  item: form.item
});

const fetchFormLoading = state => ({
  ...state,
  loading: true,
  error: ''
});

const fetchFormSuccess = (state, { form }) => ({
  ...state,
  name: form.name,
  date: form.date,
  text: form.text,
  item: form.item,
  loading: false
});

const fetchFormError = (state, { error }) => ({
  ...state,
  loading: false,
  error
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_FORM:
      return saveForm(state, action);

    case actionTypes.FETCH_FORM_LOADING:
      return fetchFormLoading(state);

    case actionTypes.FETCH_FORM_SUCCESS:
      return fetchFormSuccess(state, action);

    case actionTypes.FETCH_FORM_ERROR:
      return fetchFormError(state, action);

    default:
      return state;
  }
};
