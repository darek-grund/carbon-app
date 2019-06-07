import React from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import Pill from 'carbon-react/lib/components/pill';
import Pod from 'carbon-react/lib/components/pod';
import TextDecorator from '../../components/text-decorator';
import Portal from '../../components/portal';

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
          <Pod>This content is using portal and should be rendered above navigation menu</Pod>
        </Portal>
      </Column>
    </Row>
  );
};

export default SecondPage;
