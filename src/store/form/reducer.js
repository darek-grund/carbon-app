import * as actionTypes from './actionTypes';

const initialState = {
  name: '',
  date: '',
  text: ''
};

export default function updateForm(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_FORM: {
      return {
        ...state,
        name: action.form.name,
        date: action.form.date,
        text: action.form.text
      };
    }

    default:
      return state;
  }
}
