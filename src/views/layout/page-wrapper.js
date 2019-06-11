import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import PageHeader from './page-header';

import { Provider } from 'react-redux';
import store from '../../store';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f1f1f1;
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
  }
`;

const PageWrapper = (props) => {
  return (
    <div className='page-wrapper'>
      <GlobalStyle />
      <Provider store={store}>
        <PageHeader />
        <AppWrapper>{props.children}</AppWrapper>
      </Provider>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node
};

PageWrapper.defaultProps = {
  children: ''
};

export default PageWrapper;
