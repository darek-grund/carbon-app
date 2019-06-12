import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeaderText = styled.div`
  margin: 30px 0;
  padding: 0 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const HeaderText = (props) => {
  return <StyledHeaderText>{props.text}</StyledHeaderText>;
};

HeaderText.propTypes = {
  text: PropTypes.string
};

export default HeaderText;
