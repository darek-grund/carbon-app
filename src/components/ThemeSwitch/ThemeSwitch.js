import React from 'react';
import Switch from 'carbon-react/lib/components/switch';
import StyledThemeSwitch from './ThemeSwitch.style';
import ThemeContext from '../../context/ThemeContext';

const ThemeSwitch = () => {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <StyledThemeSwitch>
            <Switch
              value={ theme.isDark }
              onChange={ theme.toggle }
              label='Dark theme' reverse
            />
          </StyledThemeSwitch>
        )
      }
    </ThemeContext.Consumer>
  );
};

export default ThemeSwitch;
