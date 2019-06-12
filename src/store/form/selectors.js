export const getForm = state => state.form;

export const getName = state => getForm(state).name;
export const getDate = state => getForm(state).date;
export const getText = state => getForm(state).text;
export const getItem = state => getForm(state).item;
