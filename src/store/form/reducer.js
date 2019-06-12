import * as actionTypes from './actionTypes';

const initialState = {
  name: '',
  date: '',
  text: '',
  item: null
};

const saveForm = (state, { form }) => ({
  ...state,
  name: form.name,
  date: form.date,
  text: form.text,
  item: form.item
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_FORM:
      return saveForm(state, action);

    default:
      return state;
  }
};
