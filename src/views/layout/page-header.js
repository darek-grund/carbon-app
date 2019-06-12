import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu';
import HeaderTextContainer from '../../containers/header-text-container';

const PageHeader = ({ className }) => {
  return (
    <React.Fragment>
      <HeaderTextContainer />
      <NavigationBar className={ className }>
        <Menu>
          <MenuItem to='/'>Landing Page</MenuItem>
          <MenuItem to='/first-page'>First Page</MenuItem>
          <MenuItem to='/second-page'>Second Page</MenuItem>
          <MenuItem to='/transition-page'>Transition Demo Page</MenuItem>
        </Menu>
      </NavigationBar>
    </React.Fragment>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string
};

PageHeader.defaultPropTypes = {
  className: ''
};

const StyledPageHeader = styled(PageHeader)`
  border-bottom: 1px solid #255bc7;
  margin-bottom: 50px;
`;

export default StyledPageHeader;
