import React from 'react';
import NavigationBar from 'carbon-react/lib/components/navigation-bar';
import { Menu, MenuItem } from 'carbon-react/lib/components/menu';

const PageHeader = () => {
  return (
    <NavigationBar>
      <Menu>
        <MenuItem>Landing</MenuItem>
        <MenuItem>First</MenuItem>
        <MenuItem>Second</MenuItem>
      </Menu>
    </NavigationBar>
  );
};

export default PageHeader;
