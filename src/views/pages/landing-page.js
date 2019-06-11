import React from 'react';
import { Row, Column } from 'carbon-react/lib/components/row';
import DemoFormContainer from '../../containers/demo-form-container';

const LandingPage = () => {
  return (
    <Row>
      <Column>
        <DemoFormContainer />
      </Column>
    </Row>
  );
};

export default LandingPage;
