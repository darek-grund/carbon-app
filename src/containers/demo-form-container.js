import { connect } from 'react-redux';
import DemoForm from '../components/demo-form';

import { actions, selectors } from '../store/form';

const mapStateToProps = (state) => {
  return {
    name: selectors.getName(state),
    date: selectors.getDate(state),
    text: selectors.getText(state),
    item: selectors.getItem(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveForm: form => dispatch(actions.saveForm(form))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoForm);
