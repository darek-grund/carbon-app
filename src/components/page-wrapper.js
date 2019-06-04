import React from 'react';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import PageHeader from './page-header';

const PageWrapper = () => {
  return (
    <div>
      <PageHeader />
      <AppWrapper></AppWrapper>
    </div>
  );
};

export default PageWrapper;
