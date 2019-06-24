import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Chip extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    close: PropTypes.bool,
    onClose: PropTypes.func
  };

  static defaultProps = {
    children: '',
    close: false
  };

  render() {
    const {
      className,
      children,
      close,
      onClose
    } = this.props;

    return (
      <div className={ className }>
        {children}
        {close
          ? (
            <button
              type='button'
              className='close'
              onClick={ onClose }
            >close
            </button>
          )
          : false}
      </div>
    );
  }
}

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
    border: none;
    border-radius: 50%;
    margin: 0 2px 0 8px;
    padding: 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: .3s;
    font-size: 0;

    &::after {
      color: #fff;
      content: '✖';
      font-size: 10px;
    }

    &:hover {
      background-color: #666;
    }
  }
`;

export { Chip, StyledChip };
export default StyledChip;
