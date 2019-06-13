import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PageHeader from './PageHeader/PageHeader';

import store from '../../store';

import GlobalStyle from './GlobalStyle';
import StyledAppWrapper from './StyledAppWrapper';

import ThemeContext, { theme } from '../../context/ThemeContext';

const PageWrapper = ({ location, children }) => {
  const [isDark, setIsDark] = useState(false);

  const context = {
    isDark,
    toggle: () => {
      setIsDark(!isDark);
    }
  };

  const themeCurrent = isDark ? theme.dark : theme.default;

  return (
    <ThemeContext.Provider value={ context }>
      <ThemeProvider theme={ themeCurrent }>
        <div className='page-wrapper'>
          <GlobalStyle />
          <Provider store={ store }>
            <PageHeader />
            <StyledAppWrapper>
              <TransitionGroup>
                <CSSTransition
                  key={ location.pathname } timeout={ 400 }
                  classNames='fade'
                >
                  <AppWrapper>{children}</AppWrapper>
                </CSSTransition>
              </TransitionGroup>
            </StyledAppWrapper>
          </Provider>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

PageWrapper.defaultProps = {
  children: ''
};

export default PageWrapper;
