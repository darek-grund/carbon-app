import React from 'react';
import PropTypes from 'prop-types';
import StyledHeaderText from './HeaderText.style';

const HeaderText = ({ text }) => {
  return <StyledHeaderText>{text}</StyledHeaderText>;
};

HeaderText.propTypes = {
  text: PropTypes.string
};

export default HeaderText;
