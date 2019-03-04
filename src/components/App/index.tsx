import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { NavBar } from './NavBar';
import { SearchInitialPage } from '../SearchInitialPage';
import { ConnectedPropertiesListPage } from '../../containers/ConnectedPropertiesListPage';

export const App: React.FC = () => (
  <>
    <NavBar />
    <Router>
      <>
        <Route exact path="/" component={SearchInitialPage} />
        <Route exact path="/:placeName/properties" component={ConnectedPropertiesListPage} />
      </>
    </Router>
  </>
);

