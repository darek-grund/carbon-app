import React from 'react';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu';

const PageHeader = () => {
  return (
    <NavigationBar>
      <Menu>
        <MenuItem to='/'>Landing Page</MenuItem>
        <MenuItem to='first-page'>First Page</MenuItem>
        <MenuItem to='second-page'>Second Page</MenuItem>
      </Menu>
    </NavigationBar>
  );
};

export default PageHeader;
