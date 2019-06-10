import React from 'react';
import PropTypes from 'prop-types';
import { Row, Column } from 'carbon-react/lib/components/row';
import { MenuItem } from 'carbon-react/lib/components/menu';
import Pod from 'carbon-react/lib/components/pod';
import Chip from '../../components/chip';

const FirstPage = (props) => {
  return (
    <Row>
      <Column>
        <MenuItem to='/first-page/content'>Content</MenuItem>
        <MenuItem to='/first-page/content1'>Content1</MenuItem>
        <MenuItem to='/first-page/content2'>content2</MenuItem>
      </Column>
      <Column>
        <Pod>{props.children}</Pod>
        <Chip>Chip</Chip>
        <Chip close>Chip with close icon</Chip>
      </Column>
    </Row>
  );
};

FirstPage.propTypes = {
  children: PropTypes.node
};

FirstPage.defaultProps = {
  children: ''
};

export default FirstPage;
