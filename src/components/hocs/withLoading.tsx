import * as React from 'react';

import { Spinner } from '../common/Spinner';

export const WithLoading = (Component: React.ComponentType) => (props: any) => (
  <>
    <Component {...props} />
    {props.isLoading && <Spinner />}
  </>
);
