import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { NavBar } from '@app/components/App/NavBar';
import { SearchInitialPage } from '@app/components/SearchInitialPage';
import { ConnectedPropertiesListPage } from '@app/containers/ConnectedPropertiesListPage';

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

