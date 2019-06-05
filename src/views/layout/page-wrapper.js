import React from 'react';
import PropTypes from 'prop-types';
import AppWrapper from 'carbon-react/lib/components/app-wrapper';
import PageHeader from './page-header';

const PageWrapper = (props) => {
  return (
    <React.Fragment>
      <PageHeader />
      <AppWrapper>{props.children}</AppWrapper>
    </React.Fragment>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node
};

PageWrapper.defaultProps = {
  children: ''
};

export default PageWrapper;
