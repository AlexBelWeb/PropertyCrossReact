import * as React from 'react';

import { ConnectedServicePanel } from '../../containers/ConnectedServicePanel';
import { ConnectedSearchPanel } from '../../containers/ConnectedSearchPanel';

export const SearchInitialPage: React.FC = () => (
  <>
    <ConnectedSearchPanel />
    <ConnectedServicePanel />
  </>
);
