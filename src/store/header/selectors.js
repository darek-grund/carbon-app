export const getHeader = state => state.header;

export const getText = state => getHeader(state).text;
