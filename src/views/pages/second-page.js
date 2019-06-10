import React from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import Pill from 'carbon-react/lib/components/pill';
import Pod from 'carbon-react/lib/components/pod';
import PortalCarbon from 'carbon-react/lib/components/portal';
import TextDecorator from '../../components/text-decorator';
import Portal from '../../components/portal';
import ErrorBoundary from '../../components/error-boundary';
import BrokenComponent from '../../components/broken-component';

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
      </Column>
    </Row>
  );
};

export default SecondPage;
