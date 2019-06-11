import { connect } from 'react-redux';
import DemoForm from '../components/demo-form';

import { actions, selectors } from '../store/form';

const mapStateToProps = (state) => {
  return {
    name: selectors.getName(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateForm: form => dispatch(actions.updateForm(form))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoForm);
