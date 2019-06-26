import * as axios from 'axios';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import FormService from '../../services/form-service/form-service';

jest.mock('axios');
jest.mock('../../services/form-service/form-service');

describe('actions', () => {
  it('creates action to save form', () => {
    const form = {};
    const expectedAction = {
      type: actionTypes.SAVE_FORM,
      form
    };
    expect(actions.saveForm(form)).toEqual(expectedAction);
  });

  describe('fetch form using axios', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('starts loading form', async () => {
      const dispatchFormLoading = actions.fetchFormLoading();
      actions.fetchForm()(dispatch);

      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith(dispatchFormLoading);
    });

    it('dispatch fetchFormSuccess on success', async () => {
      const data = { test: 'test' };
      axios.get.mockImplementation(() => Promise.resolve({ data }));
      const expectedDispatchArgument = actions.fetchFormSuccess(data);

      await actions.fetchForm()(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(expectedDispatchArgument);
    });

    it('dispatch fetchFormError on error', async () => {
      const data = { message: 'error message' };
      // eslint-disable-next-line prefer-promise-reject-errors
      axios.get.mockImplementation(() => Promise.reject({ data }));
      const expectedDispatchArgument = actions.fetchFormError(data);

      await actions.fetchForm()(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenCalledWith(expectedDispatchArgument);
    });
  });
});
