import { createStore, combineReducers } from 'redux';
import form from './form';
import header from './header';

const reducer = combineReducers({
  form,
  header
});

export default createStore(
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
