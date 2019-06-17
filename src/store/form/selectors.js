export const getForm = state => state.form;

export const getName = state => getForm(state).name;
export const getDate = state => getForm(state).date;
export const getText = state => getForm(state).text;
export const getItem = state => getForm(state).item;

export const getLoading = state => getForm(state).loading;
export const getError = state => getForm(state).error;
