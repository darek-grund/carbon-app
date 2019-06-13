import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.bg};
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .carbon-app-wrapper {
      flex-grow: 1;
    }
    
    .carbon-navigation-bar__content {
      display: flex;
    }
  }
`;

export default GlobalStyle;
