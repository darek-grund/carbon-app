import React from 'react';

const ThemeContext = React.createContext();

export const theme = {
  default: {
    bg: '#eee',
    primary: '#333'
  },
  dark: {
    bg: '#333',
    primary: '#eee'
  }
};

export default ThemeContext;
