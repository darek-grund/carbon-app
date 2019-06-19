import * as actionTypes from './actionTypes';

export const initialState = {
  text: 'Header Text'
};

const saveText = (state, { text }) => ({
  ...state,
  text
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_TEXT:
      return saveText(state, action);

    default:
      return state;
  }
};
