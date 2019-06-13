import React, { useState } from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import { Transition, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const defaultStyle = {
  transition: '1500ms',
  opacity: 1,
  margin: '20px 0'
};

const transitionStyles = {
  entering: { opacity: 1, color: 'yellow' },
  entered: { opacity: 1, color: 'red' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const TransitionDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <h2>Transition Demo</h2>
      <button type='button' onClick={ () => setVisible(!visible) }>TOGGLE VISIBILITY</button>
      <Transition in={ visible } timeout={ 500 }>
        { state => <div style={ { ...defaultStyle, ...transitionStyles[state] } }>Lorem ipsum dolor sit amet.</div> }
      </Transition>
    </React.Fragment>
  );
};

const StyledCSSTransitionDemo = styled.div`
  opacity: 0;
  margin: 20px 0;
  
  &.transition {
    &-enter {
      opacity: 0;
    }
    &-enter-active {
      opacity: 1;
      transition: opacity 2000ms;
    }    
    &-enter-done {
      opacity: 1;
    }
    &-exit {
      opacity: 1;
    }
    &-exit-active {
      opacity: 0.5;
      transition: opacity 2000ms;
    }
    &-exit-done {
      opacity: 0;
    }
  }
`;

const CSSTransitionDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <React.Fragment>
      <h2>CSSTransition Demo</h2>
      <button type='button' onClick={ () => setVisible(!visible) }>TOGGLE VISIBILITY</button>
      <CSSTransition
        in={ visible } timeout={ 2000 }
        classNames='transition'
      >
        <StyledCSSTransitionDemo>Lorem ipsum dolor sit amet.</StyledCSSTransitionDemo>
      </CSSTransition>
    </React.Fragment>
  );
};

const TransitionPage = () => {
  return (
    <Row>
      <Column>
        <TransitionDemo />
      </Column>
      <Column>
        <CSSTransitionDemo />
      </Column>
    </Row>
  );
};

export default TransitionPage;
