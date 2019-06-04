import React from 'react';
import { Route } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

import PageWrapper from './components/page-wrapper';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
  <Route path='/' component={ PageWrapper } />
);


// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
