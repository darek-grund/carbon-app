import React from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import Pill from 'carbon-react/lib/components/pill';
import TextDecorator from '../../components/text-decorator';

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
      </Column>
    </Row>
  );
};

export default SecondPage;
