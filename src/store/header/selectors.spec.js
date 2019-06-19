import * as selectors from './selectors';

const state = {
  header: {
    text: 'example text'
  }
};

describe('selectors', () => {
  it('gets header', () => {
    expect(selectors.getHeader(state)).toEqual(state.header);
  });

  it('gets text', () => {
    expect(selectors.getText(state)).toEqual(state.header.text);
  });
});
