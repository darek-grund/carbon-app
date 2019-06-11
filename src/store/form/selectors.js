export const getForm = state => state.form;

export const getName = state => getForm(state).name;
