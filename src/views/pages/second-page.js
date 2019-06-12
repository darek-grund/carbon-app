import React, { useState } from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import Pill from 'carbon-react/lib/components/pill';
import Pod from 'carbon-react/lib/components/pod';
import PortalCarbon from 'carbon-react/lib/components/portal';
import { Transition } from 'react-transition-group';
import TextDecorator from '../../components/text-decorator';
import Portal from '../../components/portal';
import ErrorBoundary from '../../components/error-boundary';
import BrokenComponent from '../../components/broken-component';
import HeaderTextEditorContainer from '../../containers/header-text-editor-container';

const defaultStyle = {
  transition: 'opacity 1000ms',
  opacity: 0,
  margin: '0 10px'
};

const transitionStyles = {
  entering: { opacity: 1, color: 'red' },
  entered: { opacity: 1, color: 'blue' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Tmp = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button type='button' onClick={ () => setVisible(!visible) }>TOGGLE VISIBILITY</button>
      <Transition in={ visible } timeout={ 300 }>
        { state => <span style={ { ...defaultStyle, ...transitionStyles[state] } }>visible</span>}
      </Transition>
      <Transition in={ visible } timeout={ 1000 }>
        { state => <span style={ { ...defaultStyle, ...transitionStyles[state] } }>visible</span>}
      </Transition>
    </div>
  );
};

const SecondPage = () => {
  return (
    <Row>
      <Column>
        <TextDecorator>
          {text => (
            <React.Fragment>
              <Pill>{text.split('').join('*')}</Pill>
              <Pill>{text.split('').join('-')}</Pill>
            </React.Fragment>
          )}
        </TextDecorator>

        <Portal target='#portal-target'>
          <Pod title='Portal created using ReactDOM.createPortal'>
            This content is using ReactDOM.createPortal and should be rendered above navigation menu
          </Pod>
        </Portal>

        <PortalCarbon>
          <Pod>Portal used by Carbon</Pod>
        </PortalCarbon>

        <ErrorBoundary>
          <BrokenComponent />
        </ErrorBoundary>

        <HeaderTextEditorContainer />

        <Tmp />
      </Column>
    </Row>
  );
};

export default SecondPage;
