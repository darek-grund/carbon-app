import { connect } from 'react-redux';
import HeaderText from '../components/HeaderText/HeaderText';

import { selectors } from '../store/header';

const mapStateToProps = (state) => {
  return {
    text: selectors.getText(state)
  };
};

export default connect(
  mapStateToProps
)(HeaderText);
