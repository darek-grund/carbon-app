import reducer, { initialState } from './reducer';
import * as actionTypes from './actionTypes';

const form = {
  name: 'name',
  date: '2019-06-19',
  text: 'text to test',
  item: 15
};

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('handles SAVE_FORM', () => {
    const action = {
      type: actionTypes.SAVE_FORM,
      form
    };
    expect(reducer(initialState, action)).toMatchObject({ ...form });
  });

  it('handles FETCH_FORM_LOADING', () => {
    const action = {
      type: actionTypes.FETCH_FORM_LOADING,
      form
    };
    expect(reducer(initialState, action)).toMatchObject({ loading: true });
  });

  it('handles FETCH_FORM_SUCCESS', () => {
    const action = {
      type: actionTypes.FETCH_FORM_SUCCESS,
      form
    };
    expect(reducer(initialState, action)).toMatchObject({ ...form, loading: false, error: '' });
  });

  it('handles FETCH_FORM_ERROR', () => {
    const action = {
      type: actionTypes.FETCH_FORM_ERROR,
      error: 'Some error message'
    };
    expect(reducer(initialState, action))
      .toMatchObject({ ...initialState, loading: false, error: 'Some error message' });
  });
});
