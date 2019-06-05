import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { startRouter } from 'carbon-react/lib/utils/router';

import PageWrapper from './views/layout/page-wrapper';
import LandingPage from './views/pages/landing-page';
import FirstPage from './views/pages/first-page';
import SecondPage from './views/pages/second-page';
import Content from './views/pages/first-page/content';
import Content1 from './views/pages/first-page/content1';
import Content2 from './views/pages/first-page/content2';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
  <Route component={ PageWrapper }>
    <Route path='/' component={ LandingPage } />
    <Route path='first-page' component={ FirstPage }>
      <IndexRedirect to='content2' />
      <Route path='content' component={ Content } />
      <Route path='content1' component={ Content1 } />
      <Route path='content2' component={ Content2 } />
    </Route>
    <Route path='second-page' component={ SecondPage } />
  </Route>,
);

// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
