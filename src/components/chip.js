import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Chip = ({ className, children, close }) => {
  return (
    <div className={ className }>
      {children}
      {close ? <span className='close' /> : false}
    </div>
  );
};


Chip.propTypes = {
  children: PropTypes.node,
  close: PropTypes.bool
};

Chip.defaultProps = {
  children: '',
  close: false
};

const StyledChip = styled(Chip)`
  display: inline-flex;
  height: 32px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 16px;
  background: #e0e0e0;
  font-size: 13px;
  margin: 4px;

  padding: ${props => (props.close ? '0 4px 0 12px' : '0 12px')};

  .close {
    display: flex;
    width: 20px;
    height: 20px;
    background: #aaa;
    color: #fff;
    border-radius: 50%;
    margin: 0 2px 0 8px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: .3s;
  }

  .close::after {
    content: '✖';
    font-size: 10px;
  }

  .close:hover {
    background-color: #666;
  }
`;

export default StyledChip;
