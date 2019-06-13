import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import { Provider } from 'react-redux';
import PageHeader from './page-header';

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

const StyledAppWrapper = styled.div`
  & {
    position: relative;
  }
  
  .fade {
    &-enter {
      position: relative;      
      opacity: 0;
      z-index: 2;
    }
    &-enter-active {
      opacity: 1;
      transition: 400ms;
      transform: none;
    }    
    //&-enter-done {
    //  opacity: 1;
    //}
    &-exit {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 1;
      transform: none;
    }
    &-exit-active {
      opacity: 0;
      transition: 400ms;
      transform: translateX(-10%);
    }
    //&-exit-done {
    //  opacity: 0;
    //}
  }
`;

const PageWrapper = ({ location, children }) => {
  return (
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
