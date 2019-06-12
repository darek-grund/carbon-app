import { connect } from 'react-redux';
import HeaderTextEditor from '../components/header-text-editor';

import { actions, selectors } from '../store/header';

const mapStateToProps = (state) => {
  return {
    text: selectors.getText(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveText: text => dispatch(actions.saveText(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderTextEditor);
