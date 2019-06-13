import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu';
import HeaderTextContainer from '../../../containers/header-text-container';
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import StyledPageHeader from './PageHeader.style';

const PageHeader = ({ className }) => {
  return (
    <StyledPageHeader>
      <HeaderTextContainer />
      <NavigationBar className={ className }>
        <Menu>
          <MenuItem to='/'>Landing Page</MenuItem>
          <MenuItem to='/first-page'>First Page</MenuItem>
          <MenuItem to='/second-page'>Second Page</MenuItem>
          <MenuItem to='/transition-page'>Transition Demo Page</MenuItem>
        </Menu>
        <ThemeSwitch />
      </NavigationBar>
    </StyledPageHeader>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string
};

PageHeader.defaultPropTypes = {
  className: ''
};


export default PageHeader;
