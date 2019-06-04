import React from 'react';

// > TODO remove
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
// < TODO remove

import { startRouter } from 'carbon-react/lib/utils/router';

// Loads base css from carbon:
import 'carbon-react/lib/utils/css';

import PageWrapper from './components/page-wrapper';
import LandingPage from './views/pages/landing-page';
import FirstPage from './views/pages/first-page';
import SecondPage from './views/pages/second-page';

// Defines routes and corresponding components for app
// (see ReactRouter for more information):
startRouter(
    <Route path="/" component={PageWrapper}>
      <Route path="first-page" component={FirstPage}></Route>
      <Route path="second-page" component={SecondPage}></Route>
    </Route>
);

// const App = () => {
//   return (
//     <Router history={browserHistory}>
//       <Route path="/" component={PageWrapper}>
//         <Route path="abc" component={LandingPage}></Route>
//       </Route>
//       <Route path="xyz" component={LandingPage}></Route>
//     </Router>  
//   );
// }

// ReactDOM.render(<App />, document.getElementById('app'));


// Enables hot reloading through webpack:
if (module.hot) {
  module.hot.accept();
}
