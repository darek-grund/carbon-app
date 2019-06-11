import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import { actions, selectors } from '../../store/resume';

const ResumeBasicInformation = props => {
  const {
    storeBasicInformation,
    actionUpdateBasicInformation,
    storeFullName,
    storePhone,
    storeEmail,
  } = props;

  const [basicInformation, setBasicInformation] = useState(storeBasicInformation);

  return (
    <Card>
      <h2 className="mb-5">Basic information</h2>
      <div className="mb-4">
        <TextField
          placeholder="Full Name"
          defaultValue={storeFullName}
          onChangeCallback={fullName => setBasicInformation({ ...basicInformation, fullName })}
        />
      </div>
      <div className="mb-4">
        <TextField
          placeholder="Phone"
          defaultValue={storePhone}
          onChangeCallback={phone => setBasicInformation({ ...basicInformation, phone })}
        />
      </div>
      <div className="mb-4">
        <TextField
          placeholder="E-mail"
          defaultValue={storeEmail}
          onChangeCallback={email => setBasicInformation({ ...basicInformation, email })}
        />
      </div>
      <div className="d-flex justify-content-end mb-4">
        <Button onClickCallback={() => actionUpdateBasicInformation(basicInformation)}>Save</Button>
      </div>
    </Card>
  );
};

ResumeBasicInformation.propTypes = {
  storeBasicInformation: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  storeFullName: PropTypes.string.isRequired,
  storePhone: PropTypes.string.isRequired,
  storeEmail: PropTypes.string.isRequired,
  actionUpdateBasicInformation: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    storeBasicInformation: selectors.getBasicInformation(state),
    storeFullName: selectors.getFullName(state),
    storePhone: selectors.getPhone(state),
    storeEmail: selectors.getEmail(state),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actionUpdateBasicInformation: basicInformation =>
      dispatch(actions.updateBasicInformation(basicInformation)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResumeBasicInformation);
